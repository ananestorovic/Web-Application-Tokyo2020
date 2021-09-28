"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
    getSportistsBySearch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let obj = req.body;
                console.log(obj);
                let arrrayFound = [];
                if (obj.searchByName) {
                    arrrayFound.push({ 'name': obj.name });
                }
                if (obj.searchByCountry) {
                    arrrayFound.push({ 'nationality': obj.country });
                }
                if (obj.searchBySport) {
                    arrrayFound.push({ 'sport': obj.sport });
                }
                if (obj.searchByDiscipline) {
                    arrrayFound.push({ 'discipline': obj.dicsipline });
                }
                if (obj.searchByGender) {
                    arrrayFound.push({ 'sex': obj.gender });
                }
                if (obj.searchOnlyWithMedals) {
                    arrrayFound.push({ 'medalCount': { $gt: 0 } });
                }
                let foundCondObj = {};
                if (arrrayFound.length != 0)
                    foundCondObj = { $and: arrrayFound };
                console.log(foundCondObj);
                let foundSportist = yield sportist_1.default.find(foundCondObj).exec();
                console.log(foundSportist);
                res.status(200).json(foundSportist);
            }
            catch (err) {
                console.log(err);
                res.status(400).json({ 'message': err });
            }
        });
    }
}
exports.SportistController = SportistController;
//# sourceMappingURL=sportist.controller.js.map