import express from 'express';
import user from '../models/user';
import Delegate from '../models/delegate'

export class DelegateController {


    getAllDelegates = (req: express.Request, res: express.Response) => {
        Delegate.find({ 'number': { $in: [0, 1, 2] } }, (err, delegates) => {
            if (err) console.log(err);
            else {
                res.json(delegates);
            }
        })
    }

    incrementDelegate = (req: express.Request, res: express.Response) => {
        let name = req.body.name;
        Delegate.updateOne({ 'name': name }, { $inc: { 'number': 1 } }, (err, info) => {
            console.log(err);
            console.log(info);
        });
        res.json({ 'message': 'number increment' });
    }


}

