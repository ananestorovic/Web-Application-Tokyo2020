import express from 'express';
import User from '../models/user'
export class UserController{
    loginService= (req: express.Request,
        res: express.Response) =>{
            let username = req.body.username;
            let password = req.body.password;

            User.findOne({'username': username, 'password':password},
            (err, user)=> {
                if(err) console.log(err);
                else res.json(user);

            })
        }

        registerService = (req: express.Request, res: express.Response) =>{
            let user = new User(req.body);
    
            user.save().then((user)=>{
                console.log(user)
                res.status(200).json({'message':'user added'});
            }).catch((err)=>{
                console.log("greska")
                res.status(400).json({'message': err});
            })
    
            
        }

        findUser = (req: express.Request, res: express.Response)=>{
            let username = req.body.username;
    
            User.findOne({'username':username},
                (err, users)=>{
                    if(err) console.log(err);
                    else res.json(users);
                })
        }
    

        changePassword = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password= req.body.password;

        console.log(username);
        console.log(password);


        User.collection.updateOne({'username':username},{$set:{'password':password}});
        res.json({'message':'password changed'});
    }
}

