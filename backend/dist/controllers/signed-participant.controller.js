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
const signed_participant_1 = __importDefault(require("../models/signed-participant"));
class SignedParticipantController {
    constructor() {
        this.getAllParticipants = (req, res) => {
            signed_participant_1.default.find({}, (err, participants) => {
                if (err)
                    console.log(err);
                else {
                    res.json(participants);
                }
            });
        };
    }
    signParticipantToCompetition(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Usao");
            let participantInfo = new signed_participant_1.default(req.body);
            let result = yield signed_participant_1.default.findOne({
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
        });
    }
}
exports.SignedParticipantController = SignedParticipantController;
//# sourceMappingURL=signed-participant.controller.js.map