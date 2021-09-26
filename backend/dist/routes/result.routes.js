"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const result_controller_1 = require("../controllers/result.controller");
const resultRouter = express_1.default.Router();
resultRouter.route('/addResult').post((req, res) => new result_controller_1.ResultController().addResult(req, res));
resultRouter.route('/getAllResult/:competition/:roundNumber').get((req, res) => new result_controller_1.ResultController().getAllResult(req.params.competition, req.params.roundNumber, res));
exports.default = resultRouter;
//# sourceMappingURL=result.routes.js.map