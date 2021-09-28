import express from 'express';
import { MedalController } from '../controllers/medal.controller';

const medalRouter = express.Router();

medalRouter.route('/getAllMedals').get(
    (req, res)=>new MedalController().getAllMedals(req,res)
);

medalRouter.route('/updateGold').post(
    (req, res)=>new MedalController().updateGold(req,res)
);

medalRouter.route('/updateSilver').post(
    (req, res)=>new MedalController().updateSilver(req,res)
);

medalRouter.route('/updateBronze').post(
    (req, res)=>new MedalController().updateBronze(req,res)
);

export default medalRouter;