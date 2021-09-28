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

    addSportService = async (req: express.Request, res: express.Response) => {

        let foundSport = await Sport.findOne({ sport: req.body.sport }).exec();
        if (foundSport != undefined) {
            res.status(400).json({ "message": "Sport with specified name alredy exists" });
            return;
        }
        let sport = new Sport(req.body);
        sport.save().then((sport) => {
            res.status(200).json({ 'message': 'Sport successfully added' });
        }).catch((err) => {
            res.status(400).json({ 'message': err });
        })


    }

    addDisciplineService = async (req: express.Request, res: express.Response) => {
        let sport = req.body.sport;
        let discipline = req.body.discipline;

        let foundSportDiscipline = await Sport.findOne({ 'sport': sport, discipline: discipline }).exec();

        if (foundSportDiscipline != undefined) {
            res.status(400).json({ 'message': "Specified discipline alredy exists" });
            return;
        }

        Sport.collection.updateOne({ 'sport': sport },
            { $push: { discipline: discipline } });

        res.status(200).json({ "message": "Discipline succesffuly added" });
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
