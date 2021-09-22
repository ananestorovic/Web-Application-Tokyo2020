import express from 'express';
import { CountryController } from '../controllers/country.controller';
const countryRouter = express.Router();

countryRouter.route('/getAllCountries').get(
    (req, res)=>new CountryController().getAllCountries(req,res)
);

export default countryRouter;