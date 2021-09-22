"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const medal_controller_1 = require("../controllers/medal.controller");
const medalRouter = express_1.default.Router();
medalRouter.route('/getAllMedals').get((req, res) => new medal_controller_1.MedalController().getAllMedals(req, res));
exports.default = medalRouter;
//# sourceMappingURL=medal.routes.js.map