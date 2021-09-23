import express from 'express';
import Medal from '../models/medal'

export class MedalController {

    getAllMedals = (req: express.Request, res: express.Response) => {
        Medal.find({}, (err, medals) => {
            if (err) console.log(err);
            else res.json(medals);
        })
    }

}