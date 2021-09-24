import express from 'express';
import SignedParticipant from '../models/signed-participant';


export class SignedParticipantController {


    async signParticipantToCompetition(req: express.Request, res: express.Response) {
        console.log("Usao");
        let participantInfo = new SignedParticipant(req.body);

        let result = await SignedParticipant.findOne({
            name: participantInfo.get("name"),
            discipline: participantInfo.get("discipline"),
            sport: participantInfo.get("sport")
        }).exec();

        console.log(req.body);

        if (result) {
            res.json("Sprotist already signed for selected competition");
            return;
        }
        participantInfo.save();
        res.json("Sportist signed successfully");
        return;

    }

    getAllParticipants = (req: express.Request, res: express.Response) => {
        SignedParticipant.find({}, (err, participants) => {
            if (err) console.log(err);
            else {
                res.json(participants);
            }
        })
    }
}
