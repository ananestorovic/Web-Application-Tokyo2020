import express from 'express';
import Competition from '../models/competition'

export class CompetitionController {

    addCompetition = async (req: express.Request, res: express.Response) => {

        let foundCompetition = await Competition.findOne({ name: req.body.name }).exec();

        if (foundCompetition != null) {
            res.status(400).json({ "message": "Competition with specified name already exists" });
            return;
        }

        let competition = new Competition(req.body);


        competition.save().then((competition) => {
            res.status(200).json({ 'message': 'Competition successfully added' });
        }).catch((err) => {
            res.status(400).json({ 'message': err });
        })


    }


    addCompetitor = (req: express.Request, res: express.Response) => {
        let name = req.body.name;
        let signedParticipant = req.body.signedParticipant;

        Competition.collection.updateOne({ 'name': name }, { $addToSet: { 'signedParticipants': signedParticipant } });
        res.json({ 'message': 'Competitor successfully added' });
    }

    changeCompetitionStatus = (req: express.Request, res: express.Response) => {
        let name = req.body.name;
        let formed = req.body.formed;

        Competition.collection.updateOne({ 'name': name }, { $set: { 'formed': formed } });
        res.json({ 'message': 'Competition status successfully updated' });
    }


    async getAllOpenCompetion(req: express.Request, res: express.Response) {
        try {
            let result = await Competition.find({ formed: "NO" }).exec();
            //console.log(result);
            res.status(200).json(result);
        } catch (exception) {
            res.status(400).json({ 'message': exception });
        }
    }


    async getAllCompetion(req: express.Request, res: express.Response) {
        try {
            let result = await Competition.find({}).exec();
            console.log(result);
            res.status(200).json(result);
        } catch (exception) {
            res.status(400).json({ 'message': exception });
        }
    }

    addDateTimeFinalRound = (req: express.Request, res: express.Response) => {
        let name = req.body.name;
        let dateFinalRound = req.body.dateFinalRound;
        let timeFinalRound = req.body.timeFinalRound;

        Competition.collection.updateOne({ 'name': name }, { $set: { 'dateFinalRound': dateFinalRound, 'timeFinalRound': timeFinalRound } });
        res.json({ 'message': 'added' });
    }

    getCompetitionByName = (req: express.Request, res: express.Response) => {
        let name = req.body.name;

        Competition.findOne({ 'name': name },
            (err, users) => {
                if (err) console.log(err);
                else res.json(users);
            })
    }
}


