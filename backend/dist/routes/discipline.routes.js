"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const discipline_controller_1 = require("../controllers/discipline.controller");
const disciplineRouter = express_1.default.Router();
disciplineRouter.route('/addDisciplineService').post((req, res) => new discipline_controller_1.DisciplineController().addDisciplineService(req, res));
disciplineRouter.route('/getAllDisciplines').get((req, res) => new discipline_controller_1.DisciplineController().getAllDisciplines(req, res));
disciplineRouter.route('/getAllIndividualDisciplines').get((req, res) => new discipline_controller_1.DisciplineController().getAllIndividualDisciplines(req, res));
exports.default = disciplineRouter;
//# sourceMappingURL=discipline.routes.js.map