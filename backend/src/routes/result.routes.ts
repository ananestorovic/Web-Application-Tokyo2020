import express from 'express';
import { ResultController } from '../controllers/result.controller';
const resultRouter = express.Router();

resultRouter.route('/addResult').post(
    (req, res)=>new ResultController().addResult(req,res)
);

resultRouter.route('/getAllResult/:competition/:roundNumber').get(
    (req, res)=>new ResultController().getAllResult(req.params.competition, req.params.roundNumber,res)
);




export default resultRouter;