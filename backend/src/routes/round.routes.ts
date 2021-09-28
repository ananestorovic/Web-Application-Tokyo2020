import express from 'express';
import { RoundController } from '../controllers/round.controller';

const roundRouter = express.Router();

roundRouter.route('/addRound').post(
    (req, res)=>new RoundController().addRound(req,res)
);

roundRouter.route('/getRound').post(
    (req, res)=>new RoundController().getRound(req,res)
);

roundRouter.route('/doneRound').post(
    (req, res)=>new RoundController().doneRound(req,res)
);

roundRouter.route('/getFinalRounds').get(
    (req, res)=>new RoundController().getFinalRounds(req,res)
);
roundRouter.route('/updateFinalRound').post(
    (req, res)=>new RoundController().updateFinalRound(req,res)
);




export default roundRouter;