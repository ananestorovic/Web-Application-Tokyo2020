import express from 'express';
import User from '../models/user'
export class UserController {
    loginService = (req: express.Request,
        res: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;

        User.findOne({ 'username': username, 'password': password },
            (err, user) => {
                if (err) console.log(err);
                else res.json(user);

            })
    }

    registerService = (req: express.Request, res: express.Response) => {
        let user = new User(req.body);

        user.save().then((user) => {
            console.log(user)
            res.status(200).json({ 'message': 'user added' });
        }).catch((err) => {
            console.log("greska")
            res.status(400).json({ 'message': err });
        })


    }

    findUser = (req: express.Request, res: express.Response) => {
        let username = req.body.username;

        User.findOne({ 'username': username },
            (err, users) => {
                if (err) console.log(err);
                else res.json(users);
            })
    }


    changePassword = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;

        User.collection.updateOne({ 'username': username }, { $set: { 'password': password } });
        res.json({ 'message': 'password changed' });
    }

    getDelegates = (req: express.Request, res: express.Response) => {
        User.find({ 'type': "Delegate" }, (err, users) => {
            if (err) console.log(err);
            else {
                res.json(users);
            }
        })
    }

    getNotApprovedUsers = (req: express.Request, res: express.Response) => {
        User.find({ 'approved': 0, 'type': req.params.type }, (err, users) => {
            console.log("usao");
            console.log(users);
            if (err) console.log(err);
            else res.json(users);
        })
    }

    approveUser = async (req: express.Request, res: express.Response) => {
        let username = req.body.username;

        let userToApprove = await User.findOne({ 'username': username }).exec();

        if (userToApprove.get("approved") == 1) {
            res.status(400).json({ "message": "User already approved" });
            return;
        }

        if (userToApprove.get("type") == "Leader") {
            let foundapprovedSameCountry = await User.findOne({
                'type': "Leader",
                'country': userToApprove.get("country"),
                'approved': 1
            }).exec();
            if (foundapprovedSameCountry != undefined) {
                res.status(400).json({ "message": "User country leader already set" });
                return;
            }
        }

        User.updateOne({ 'username': username }, { $set: { 'approved': 1 } }, (err, info) => {
            console.log(info);
            if (err) console.log(err);
            else res.status(200).json({ "message": "User successfully approved" });
        });

    }



}

