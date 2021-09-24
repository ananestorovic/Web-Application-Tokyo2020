import express from 'express';
import { SportController } from '../controllers/sport.controller';


const sportRouter = express.Router();

sportRouter.route('/getAllSports').get(
    (req, res)=>new SportController().getAllSports(req,res)
);

sportRouter.route('/addSportService').post(
  
    (req, res)=>new SportController().addSportService(req,res)
);

sportRouter.route('/addDisciplineService').post(
  
    (req, res)=>new SportController().addDisciplineService(req,res)
);

sportRouter.route('/getSportByName').post(
  
    (req, res)=>new SportController().getSportByName(req,res)
);


export default sportRouter;