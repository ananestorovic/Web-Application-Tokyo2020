"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signed_participant_controller_1 = require("../controllers/signed-participant.controller");
const signedParticipantRouter = express_1.default.Router();
signedParticipantRouter.route("/signParticipantToCompetition").post((req, res) => {
    new signed_participant_controller_1.SignedParticipantController().signParticipantToCompetition(req, res);
});
signedParticipantRouter.route('/getAllParticipants').get((req, res) => new signed_participant_controller_1.SignedParticipantController().getAllParticipants(req, res));
exports.default = signedParticipantRouter;
//# sourceMappingURL=signed-participant.routes.js.map