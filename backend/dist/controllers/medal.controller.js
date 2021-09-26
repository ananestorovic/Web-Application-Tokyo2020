"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const medal_1 = __importDefault(require("../models/medal"));
class MedalController {
    constructor() {
        this.getAllMedals = (req, res) => {
            medal_1.default.find({}, (err, medals) => {
                if (err)
                    console.log(err);
                else
                    res.json(medals);
            });
        };
    }
}
exports.MedalController = MedalController;
//# sourceMappingURL=medal.controller.js.map