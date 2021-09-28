"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoundController = void 0;
const round_1 = __importDefault(require("../models/round"));
class RoundController {
    constructor() {
        this.addRound = (req, res) => {
            let round = new round_1.default(req.body);
            round.save().then((rounds) => {
                console.log(rounds);
                res.status(200).json({ 'message': 'round added' });
            }).catch((err) => {
                console.log("greska");
                res.status(400).json({ 'message': err });
            });
        };
        this.getRound = (req, res) => {
            let competition = req.body.competition;
            let numRound = req.body.numRound;
            round_1.default.findOne({ 'competition': competition, 'numRound': numRound }, (err, rounds) => {
                if (err)
                    console.log(err);
                else
                    res.json(rounds);
            });
        };
        this.doneRound = (req, res) => {
            let competition = req.body.competition;
            let numRound = req.body.numRound;
            round_1.default.collection.updateOne({ 'competition': competition, 'numRound': numRound }, { $set: { 'isFinal': "YES" } });
            res.json({ 'message': 'round closed' });
        };
        this.getFinalRounds = (req, res) => {
            round_1.default.find({ 'isFinal': "YES", 'numRound': 1 }, (err, rounds) => {
                if (err)
                    console.log(err);
                else
                    res.json(rounds);
            });
        };
        this.updateFinalRound = (req, res) => {
            let competition = req.body.competition;
            let results = req.body.results;
            let participants = req.body.participants;
            let numRound = req.body.numRound;
            round_1.default.collection.updateOne({ 'competition': competition, 'numRound': numRound }, { $set: { 'results': results, 'participants': participants } });
            res.json({ 'message': 'final round update' });
        };
    }
}
exports.RoundController = RoundController;
//# sourceMappingURL=round.controller.js.map