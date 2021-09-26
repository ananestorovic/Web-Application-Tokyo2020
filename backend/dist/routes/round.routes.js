"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const round_controller_1 = require("../controllers/round.controller");
const roundRouter = express_1.default.Router();
roundRouter.route('/addRound').post((req, res) => new round_controller_1.RoundController().addRound(req, res));
roundRouter.route('/getRound').post((req, res) => new round_controller_1.RoundController().getRound(req, res));
roundRouter.route('/doneRound').post((req, res) => new round_controller_1.RoundController().doneRound(req, res));
roundRouter.route('/getFinalRounds').get((req, res) => new round_controller_1.RoundController().getFinalRounds(req, res));
exports.default = roundRouter;
//# sourceMappingURL=round.routes.js.map