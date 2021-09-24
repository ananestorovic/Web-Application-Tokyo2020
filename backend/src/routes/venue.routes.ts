import express from 'express';
import { VenueController } from '../controllers/venue.controller';


const venueRouter = express.Router();

venueRouter.route('/getAllVenues').get(
    (req, res)=>new VenueController().getAllVenues(req,res)
);



export default venueRouter;