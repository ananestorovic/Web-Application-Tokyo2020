"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportController = void 0;
const sport_1 = __importDefault(require("../models/sport"));
class SportController {
    constructor() {
        this.getAllSports = (req, res) => {
            sport_1.default.find({}, (err, sports) => {
                if (err)
                    console.log(err);
                else
                    res.json(sports);
            });
        };
    }
}
exports.SportController = SportController;
//# sourceMappingURL=sport.controller.js.map