"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchController = void 0;
const match_1 = __importDefault(require("../models/match"));
class MatchController {
    constructor() {
        this.addMatch = (req, res) => {
            let match = new match_1.default(req.body);
            match.save().then((matchs) => {
                console.log(matchs);
                res.status(200).json({ 'message': 'match added' });
            }).catch((err) => {
                console.log("greska");
                res.status(400).json({ 'message': err });
            });
        };
        this.deleteMatch = (req, res) => {
            let competition = req.body.competition;
            let participant1 = req.body.participant1;
            let participant2 = req.body.participant2;
            let done = req.body.done;
            match_1.default.collection.remove({ 'competition': competition, 'participant1': participant1, 'participant2': participant2,
                'done': done });
            res.json({ 'message': 'remove one match' });
        };
        this.getAllUnfinishedMatchs = (req, res) => {
            let competition = req.body.competition;
            match_1.default.find({ 'competition': competition, 'done': "NO" }, (err, matchs) => {
                if (err)
                    console.log(err);
                else
                    res.json(matchs);
            });
        };
    }
}
exports.MatchController = MatchController;
//# sourceMappingURL=match.controller.js.map