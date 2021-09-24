import express from 'express';
import Sport from '../models/sport'
import Discipline from '../models/discipline'


export class SportController {

    getAllSports = (req: express.Request, res: express.Response) => {
        console.log("Sportovi");
        Sport.find({}, (err, sports) => {
            console.log(sports);
            if (err) console.log(err);
            else {
                res.json(sports);
            }
        })
    }

    getSportByName = (req: express.Request, res: express.Response) => {
        let sportName = req.body.sportName;
        Sport.find({ 'sport': sportName }, (err, sports) => {
            if (err) console.log(err);
            else res.json(sports);
        })
    }

    addSportService = (req: express.Request, res: express.Response) =>{
        let sport = new Sport(req.body);
        sport.save().then((sport)=>{
            res.status(200).json({'message':'sport added'});
        }).catch((err)=>{
            res.status(400).json({'message': err});
        })

        
    }

    addDisciplineService = (req: express.Request, res: express.Response) =>{
        let sport = req.body.sport;
        let discipline = req.body. discipline;
        console.log(sport);
        console.log(discipline);
        Sport.collection.updateOne({'sport': sport},
        {$push: {discipline: discipline}});


        
    }

    async getAllSportDiscpiline(sport: string, res: express.Response) {
        try {
            let result = await Sport.findOne({ 'sport': sport }, { '_id': 0, 'disciplines': 1 });
            res.json(result.get("disciplines"));
            return;
        } catch (error) {
            res.json({ "error": "Error" });
        }

    }

    

}
