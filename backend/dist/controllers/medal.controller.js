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
        this.updateGold = (req, res) => {
            console.log("TELO" + req.body.country);
            let country = req.body.country;
            medal_1.default.collection.updateOne({ 'country': country }, { $inc: { 'numGold': 1, 'sum': 1 } });
            res.json({ 'message': 'gold inc' });
        };
        this.updateSilver = (req, res) => {
            console.log("TELO" + req.body.country);
            let country = req.body.country;
            medal_1.default.collection.updateOne({ 'country': country }, { $inc: { 'numSilver': 1, 'sum': 1 } });
            res.json({ 'message': 'silver inc' });
        };
        this.updateBronze = (req, res) => {
            console.log("TELO" + req.body.country);
            let country = req.body.country;
            medal_1.default.collection.updateOne({ 'country': country }, { $inc: { 'numBronze': 1, 'sum': 1 } });
            res.json({ 'message': 'silver inc' });
        };
    }
}
exports.MedalController = MedalController;
//# sourceMappingURL=medal.controller.js.map