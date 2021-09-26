"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const country_1 = __importDefault(require("../models/country"));
class CountryController {
    constructor() {
        this.getAllCountries = (req, res) => {
            country_1.default.find({}, (err, countries) => {
                if (err)
                    console.log(err);
                else
                    res.json(countries);
            });
        };
    }
}
exports.CountryController = CountryController;
//# sourceMappingURL=country.controller.js.map