import express from 'express';
import Round from '../models/round'



export class RoundController {


    addRound = (req: express.Request, res: express.Response) => {
        let round = new Round(req.body);

        round.save().then((rounds) => {
            console.log(rounds)
            res.status(200).json({ 'message': 'round added' });
        }).catch((err) => {
            console.log("greska")
            res.status(400).json({ 'message': err });
        })


    }

    getRound = (req: express.Request, res: express.Response) => {
        let competition = req.body.competition;
        let numRound = req.body.numRound;

        Round.findOne({ 'competition': competition, 'numRound': numRound },
            (err, rounds) => {
                if (err) console.log(err);
                else res.json(rounds);
            })
    }

    doneRound = (req: express.Request, res: express.Response) => {
        let competition = req.body.competition;
        let numRound = req.body.numRound;

        Round.collection.updateOne({ 'competition': competition, 'numRound': numRound }, { $set: { 'isFinal': "YES" } });
        res.json({ 'message': 'round closed' });
    }

    getFinalRounds = (req: express.Request, res: express.Response) => {
        Round.find({ 'numRound': 1 }, (err, rounds) => {
            if (err) console.log(err);
            else res.json(rounds);
        })
    }

    updateFinalRound = (req: express.Request, res: express.Response) => {
        let competition = req.body.competition;
        let results = req.body.results;
        let participants = req.body.participants;
        let numRound = req.body.numRound;

        Round.collection.updateOne({ 'competition': competition, 'numRound': numRound },
            { $set: { 'results': results, 'participants': participants } });
        res.json({ 'message': 'final round update' });
    }


}