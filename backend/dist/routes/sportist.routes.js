"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sportist_controller_1 = require("../controllers/sportist.controller");
const sportistRouter = express_1.default.Router();
sportistRouter.route('/getAllSportists').get((req, res) => new sportist_controller_1.SportistController().getAllSportists(req, res));
sportistRouter.route('/getSportists').post((req, res) => new sportist_controller_1.SportistController().getSportists(req, res));
sportistRouter.route('/getSportistsByCountryAndSport').post((req, res) => new sportist_controller_1.SportistController().getSportistsByCountryAndSport(req, res));
sportistRouter.route('/getSportistsByNameAndSport').post((req, res) => new sportist_controller_1.SportistController().getSportistsByNameAndSport(req, res));
sportistRouter.route('/getSportistsByNameAndCountry').post((req, res) => new sportist_controller_1.SportistController().getSportistsByNameAndCountry(req, res));
sportistRouter.route('/getSportistsBySport').post((req, res) => new sportist_controller_1.SportistController().getSportistsBySport(req, res));
sportistRouter.route('/getSportistsByCountry').post((req, res) => new sportist_controller_1.SportistController().getSportistsByCountry(req, res));
sportistRouter.route('/getSportistsByName').post((req, res) => new sportist_controller_1.SportistController().getSportistsByName(req, res));
sportistRouter.route('/getSportistByName').post((req, res) => new sportist_controller_1.SportistController().getSportistByName(req, res));
sportistRouter.route('/getSportistsBySearch').post((req, res) => new sportist_controller_1.SportistController().getSportistsBySearch(req, res));
sportistRouter.route('/updateMedalCount').post((req, res) => new sportist_controller_1.SportistController().updateMedalCount(req, res));
exports.default = sportistRouter;
//# sourceMappingURL=sportist.routes.js.map