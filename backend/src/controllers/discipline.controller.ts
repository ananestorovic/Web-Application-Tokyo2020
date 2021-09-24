import express from 'express';
import Discipline from '../models/discipline'


export class DisciplineController {


    addDisciplineService = (req: express.Request, res: express.Response) => {
        let discipline = new Discipline(req.body);
        console.log(discipline);
        discipline.save().then((discipline) => {
            console.log(discipline);
            console.log("USPEO DA NAPRAVI");
            res.status(200).json({ 'message': 'discipline added' });
        }).catch((err) => {
            res.status(400).json({ 'message': err });
        })


    }

    getAllDisciplines = (req: express.Request, res: express.Response) => {
        Discipline.find({}, (err, disciplines) => {
            if (err) console.log(err);
            else {
                res.json(disciplines);
            }
        })
    }

    getAllIndividualDisciplines = (req: express.Request, res: express.Response) => {
        Discipline.distinct("sport", { 'minNumPlayers': 1, 'maxNumPlayers': 1 }, (err, disciplines) => {
            console.log(disciplines);
            if (err) console.log(err);
            else {
                res.json(disciplines);
            }
        })
    }





}