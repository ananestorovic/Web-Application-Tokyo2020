import express from 'express';
import User from '../models/user'
export class UserController{
    login= (req: express.Request,
        res: express.Response) =>{
            let username = req.body.username;
            let password = req.body.password;

            User.findOne({'username': username, 'password':password},
            (err, user)=> {
                if(err) console.log(err);
                else res.json(user);

            })
        }

        register = (req: express.Request, res: express.Response) =>{
            let user = new User(req.body);
    
            user.save().then((user)=>{
                res.status(200).json({'message':'user added'});
            }).catch((err)=>{
                res.status(400).json({'message': err});
            })
    
            
        }
    }

