"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const competition_1 = __importDefault(require("../models/competition"));
class CompetitionController {
    constructor() {
        this.addCompetition = (req, res) => {
            console.log(req.body);
            let competition = new competition_1.default(req.body);
            competition.save().then((competition) => {
                res.status(200).json({ 'message': 'competition added' });
            }).catch((err) => {
                res.status(400).json({ 'message': err });
            });
        };
        this.addCompetitor = (req, res) => {
            let name = req.body.name;
            let signedParticipant = req.body.signedParticipant;
            competition_1.default.collection.updateOne({ 'name': name }, { $addToSet: { 'signedParticipants': signedParticipant } });
            res.json({ 'message': 'competitor added' });
        };
        this.closeCompetition = (req, res) => {
            let name = req.body.name;
            let formed = req.body.formed;
            competition_1.default.collection.updateOne({ 'name': name }, { $set: { 'formed': formed } });
            res.json({ 'message': 'competition closed' });
        };
        this.addDateTimeFinalRound = (req, res) => {
            let name = req.body.name;
            let dateFinalRound = req.body.dateFinalRound;
            let timeFinalRound = req.body.timeFinalRound;
            competition_1.default.collection.updateOne({ 'name': name }, { $set: { 'dateFinalRound': dateFinalRound, 'timeFinalRound': timeFinalRound } });
            res.json({ 'message': 'added' });
        };
        this.getCompetitionByName = (req, res) => {
            let name = req.body.name;
            competition_1.default.findOne({ 'name': name }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json(users);
            });
        };
    }
    getAllOpenCompetion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield competition_1.default.find({ formed: "NO" }).exec();
                //console.log(result);
                res.status(200).json(result);
            }
            catch (exception) {
                res.status(400).json({ 'message': exception });
            }
        });
    }
    getAllCompetion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield competition_1.default.find({}).exec();
                console.log(result);
                res.status(200).json(result);
            }
            catch (exception) {
                res.status(400).json({ 'message': exception });
            }
        });
    }
}
exports.CompetitionController = CompetitionController;
//# sourceMappingURL=competition.controller.js.map