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
const result_1 = __importDefault(require("../models/result"));
class ResultController {
    constructor() {
        this.addResult = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = new result_1.default(req.body);
            let foundResult = yield result_1.default.findOne({
                competition: req.body.competition,
                participant: req.body.participant,
                numRound: req.body.numRound
            }).exec();
            if (foundResult) {
                res.status(400).json({ 'message': 'User already added for current round' });
                return;
            }
            result.save().then((result) => {
                console.log(result);
                res.status(200).json({ 'message': 'result added' });
            }).catch((err) => {
                console.log("greska");
                res.status(400).json({ 'message': err });
            });
        });
    }
    getAllResult(competitionName, roundNumber, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield result_1.default.find({
                    competitionName: competitionName,
                    roundNumber: roundNumber
                });
                response.status(200).json(result);
            }
            catch (err) {
                response.status(400).json({ 'message': err });
            }
        });
    }
}
exports.ResultController = ResultController;
//# sourceMappingURL=result.controller.js.map