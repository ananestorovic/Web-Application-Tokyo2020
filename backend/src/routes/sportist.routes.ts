import express from 'express';
import { SportistController } from '../controllers/sportist.controller';

const sportistRouter = express.Router();

sportistRouter.route('/getAllSportists').get(
    (req, res) => new SportistController().getAllSportists(req, res)
);

sportistRouter.route('/getSportists').post(
    (req, res) => new SportistController().getSportists(req, res)
);

sportistRouter.route('/getSportistsByCountryAndSport').post(
    (req, res) => new SportistController().getSportistsByCountryAndSport(req, res)
);

sportistRouter.route('/getSportistsByNameAndSport').post(
    (req, res) => new SportistController().getSportistsByNameAndSport(req, res)
);

sportistRouter.route('/getSportistsByNameAndCountry').post(
    (req, res) => new SportistController().getSportistsByNameAndCountry(req, res)
);

sportistRouter.route('/getSportistsBySport').post(
    (req, res) => new SportistController().getSportistsBySport(req, res)
);

sportistRouter.route('/getSportistsByCountry').post(
    (req, res) => new SportistController().getSportistsByCountry(req, res)
);

sportistRouter.route('/getSportistsByName').post(
    (req, res) => new SportistController().getSportistsByName(req, res)
);

sportistRouter.route('/getSportistByName').post(
    (req, res) => new SportistController().getSportistByName(req, res)
);

sportistRouter.route('/getSportistsBySearch').post(
    (req, res) => new SportistController().getSportistsBySearch(req, res) 
);


sportistRouter.route('/updateMedalCount').post(
    (req, res) => new SportistController().updateMedalCount(req, res)
);

export default sportistRouter;