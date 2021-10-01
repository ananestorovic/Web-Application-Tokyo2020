"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportistController = void 0;
const sportist_1 = __importDefault(require("../models/sportist"));
class SportistController {
    constructor() {
        this.getAllSportists = (req, res) => {
            sportist_1.default.find({}, (err, sportists) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportists);
            });
        };
        this.getSportists = (req, res) => {
            let name = req.body.name;
            let country = req.body.country;
            let sport = req.body.sport;
            sportist_1.default.find({ 'name': name, 'country': country, 'sport': sport }, (err, sportists) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportists);
            });
        };
        this.getSportistsByNameAndCountry = (req, res) => {
            let name = req.body.name;
            let country = req.body.country;
            sportist_1.default.find({ 'name': name, 'nationality': country }, (err, sportists) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportists);
            });
        };
        this.getSportistsByNameAndSport = (req, res) => {
            let name = req.body.name;
            let sport = req.body.sport;
            sportist_1.default.find({ 'name': name, 'sport': sport }, (err, sportists) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportists);
            });
        };
        this.getSportistsByCountryAndSport = (req, res) => {
            let country = req.body.country;
            let sport = req.body.sport;
            sportist_1.default.find({ 'nationality': country, 'sport': sport }, (err, sportists) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportists);
            });
        };
        this.getSportistsByName = (req, res) => {
            let name = req.body.name;
            sportist_1.default.find({ 'name': name }, (err, sportists) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportists);
            });
        };
        this.getSportistByName = (req, res) => {
            let name = req.body.name;
            sportist_1.default.findOne({ 'name': name }, (err, sportists) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportists);
            });
        };
        this.getSportistsByCountry = (req, res) => {
            let country = req.body.country;
            console.log(country);
            sportist_1.default.find({ 'nationality': country }, (err, sportists) => {
                console.log(sportists);
                if (err)
                    console.log(err);
                else
                    res.json(sportists);
            });
        };
        this.getSportistsBySport = (req, res) => {
            let sport = req.body.sport;
            sportist_1.default.find({ 'sport': sport }, (err, sportists) => {
                if (err)
                    console.log(err);
                else
                    res.json(sportists);
            });
        };
        this.updateMedalCount = (req, res) => {
            let name = req.body.name;
            console.log(req.body.name);
            sportist_1.default.collection.updateOne({ 'name': name }, { $inc: { 'medalCount': 1 } });
            res.json({ 'message': 'medal count increment' });
        };
    }
}
exports.SportistController = SportistController;
//# sourceMappingURL=sportist.controller.js.map