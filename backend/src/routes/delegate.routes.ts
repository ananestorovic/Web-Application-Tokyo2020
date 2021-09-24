import express from 'express';
import { DelegateController } from '../controllers/delegate.controller';

const delegateRouter = express.Router();

delegateRouter.route('/getAllDelegates').get(
    (req, res)=>new DelegateController().getAllDelegates(req, res)
);

delegateRouter.route('/incrementDelegate').post(
    (req, res)=>new DelegateController().incrementDelegate(req, res)
);

export default delegateRouter;