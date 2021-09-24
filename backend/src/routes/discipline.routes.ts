import express from 'express';
import { DisciplineController } from '../controllers/discipline.controller';



const disciplineRouter = express.Router();


disciplineRouter.route('/addDisciplineService').post(
  
    (req, res)=>new DisciplineController().addDisciplineService(req,res)
);



disciplineRouter.route('/getAllDisciplines').get(
  
    (req, res)=>new DisciplineController().getAllDisciplines(req,res)
);

disciplineRouter.route('/getAllIndividualDisciplines').get(
  
    (req, res)=>new DisciplineController().getAllIndividualDisciplines(req,res)
);




export default disciplineRouter;