import express from 'express';
import { SportController } from '../controllers/sport.controller';


const sportRouter = express.Router();

sportRouter.route('/getAllSports').get(
    (req, res)=>new SportController().getAllSports(req,res)
);


export default sportRouter;