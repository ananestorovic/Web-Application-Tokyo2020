import express from 'express';
import Medal from '../models/medal'

export class MedalController {

    getAllMedals = (req: express.Request, res: express.Response) => {
        Medal.find({}, (err, medals) => {
            if (err) console.log(err);
            else res.json(medals);
        })
    }

    updateGold= (req: express.Request, res: express.Response) => {
        let country = req.body.country;
    Medal.collection.updateOne({'country':country},{$inc:{'numGold':1 }});
    res.json({'message':'gold inc'});
}

    updateSilver= (req: express.Request, res: express.Response) => {
        let country = req.body.country;
    Medal.collection.updateOne({'country':country},{$inc:{'numSilver':1 }});
    res.json({'message':'silver inc'});
}


    updateBronze= (req: express.Request, res: express.Response) => {
        let country = req.body.country;
    Medal.collection.updateOne({'country':country},{$inc:{'numBronze':1 }});
    res.json({'message':'silver inc'});
}

}