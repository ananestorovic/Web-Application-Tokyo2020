import express from 'express';
import { CompetitionController } from '../controllers/competition.controller';


const competitionRouter = express.Router();


competitionRouter.route('/addCompetition').post(
    (req, res)=>new CompetitionController().addCompetition(req, res)
);


competitionRouter.route('/addCompetitor').post(
    (req, res)=>new CompetitionController().addCompetitor(req, res)
);

competitionRouter.route('/closeCompetition').post(
    (req, res)=>new CompetitionController().closeCompetition(req, res)
);

competitionRouter.route('/getAllOpenCompetition').get(
    (req, res) => new CompetitionController().getAllOpenCompetion(req, res)
);


competitionRouter.route('/getAllCompetition').get(
    (req, res) => new CompetitionController().getAllCompetion(req, res)
);


export default competitionRouter;