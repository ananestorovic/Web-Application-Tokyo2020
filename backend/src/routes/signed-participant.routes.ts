import express from 'express';
import { SignedParticipantController } from '../controllers/signed-participant.controller';



const signedParticipantRouter = express.Router();


signedParticipantRouter.route("/signParticipantToCompetition").post((req, res) => {
    new SignedParticipantController().signParticipantToCompetition(req, res);
})

signedParticipantRouter.route('/getAllParticipants').get(
    (req, res)=>new SignedParticipantController().getAllParticipants(req,res)
);


export default signedParticipantRouter;