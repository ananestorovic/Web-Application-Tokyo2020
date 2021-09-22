import express from 'express';
import { UserController } from '../controllers/user.controller';
const userRouter = express.Router();

userRouter.route('/loginService').post(
    (req, res)=>new UserController().loginService(req,res)
);

userRouter.route('/registerService').post(
    (req, res)=>new UserController().registerService(req, res)
);

userRouter.route('/findUser').post(
    (req, res)=>new UserController().findUser(req, res)
);

userRouter.route('/changePassword').post(
    (req, res)=>new UserController().changePassword(req, res)
);

export default userRouter;