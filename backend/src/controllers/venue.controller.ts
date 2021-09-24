import express from 'express';
import Venue from '../models/venue'

export class VenueController{
   
    getAllVenues = (req: express.Request, res: express.Response) => {
        Venue.find({}, (err, venues) => {
            console.log(venues);
            if (err) console.log(err);
            else res.json(venues);
        })
    }
}

