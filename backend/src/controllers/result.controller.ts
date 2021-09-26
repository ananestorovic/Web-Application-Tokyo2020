import express from 'express';
import Result from '../models/result'


export class ResultController {

    addResult = async (req: express.Request, res: express.Response) => {
        let result = new Result(req.body);

        let foundResult = await Result.findOne({
            competition: req.body.competition,
            participant: req.body.participant,
            numRound: req.body.numRound
        }).exec();

        if (foundResult) {
            res.status(400).json({ 'message': 'User already added for current round' });
            return;
        }

        result.save().then((result) => {
            console.log(result)
            res.status(200).json({ 'message': 'result added' });
        }).catch((err) => {
            console.log("greska")
            res.status(400).json({ 'message': err });
        })


    }

    async getAllResult(competitionName: string, roundNumber: string, response: express.Response) {

        try {
            let result = await Result.find({
                competitionName: competitionName,
                roundNumber: roundNumber
            });
            response.status(200).json(result);
        } catch (err) {
            response.status(400).json({ 'message': err });
        }
    }

}