import express from 'express';
import { MedalController } from '../controllers/medal.controller';

const medalRouter = express.Router();

medalRouter.route('/getAllMedals').get(
    (req, res)=>new MedalController().getAllMedals(req,res)
);

export default medalRouter;