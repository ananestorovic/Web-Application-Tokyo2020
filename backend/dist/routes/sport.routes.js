"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sport_controller_1 = require("../controllers/sport.controller");
const sportRouter = express_1.default.Router();
sportRouter.route('/getAllSports').get((req, res) => new sport_controller_1.SportController().getAllSports(req, res));
sportRouter.route('/addSportService').post((req, res) => new sport_controller_1.SportController().addSportService(req, res));
sportRouter.route('/addDisciplineService').post((req, res) => new sport_controller_1.SportController().addDisciplineService(req, res));
sportRouter.route('/getSportByName').post((req, res) => new sport_controller_1.SportController().getSportByName(req, res));
exports.default = sportRouter;
//# sourceMappingURL=sport.routes.js.map