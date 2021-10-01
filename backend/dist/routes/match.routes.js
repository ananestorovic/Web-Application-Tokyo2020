"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const match_controller_1 = require("../controllers/match.controller");
const matchRouter = express_1.default.Router();
matchRouter.route('/addMatch').post((req, res) => new match_controller_1.MatchController().addMatch(req, res));
matchRouter.route('/deleteMatch').post((req, res) => new match_controller_1.MatchController().deleteMatch(req, res));
matchRouter.route('/getAllUnfinishedMatchs').post((req, res) => new match_controller_1.MatchController().getAllUnfinishedMatchs(req, res));
exports.default = matchRouter;
//# sourceMappingURL=match.routes.js.map