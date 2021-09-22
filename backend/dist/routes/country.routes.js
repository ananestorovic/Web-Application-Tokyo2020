"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const country_controller_1 = require("../controllers/country.controller");
const countryRouter = express_1.default.Router();
countryRouter.route('/getAllCountries').get((req, res) => new country_controller_1.CountryController().getAllCountries(req, res));
exports.default = countryRouter;
//# sourceMappingURL=country.routes.js.map