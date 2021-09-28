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
const sport_1 = __importDefault(require("../models/sport"));
class SportController {
    constructor() {
        this.getAllSports = (req, res) => {
            console.log("Sportovi");
            sport_1.default.find({}, (err, sports) => {
                console.log(sports);
                if (err)
                    console.log(err);
                else {
                    res.json(sports);
                }
            });
        };
        this.getSportByName = (req, res) => {
            let sportName = req.body.sportName;
            sport_1.default.find({ 'sport': sportName }, (err, sports) => {
                if (err)
                    console.log(err);
                else
                    res.json(sports);
            });
        };
        this.addSportService = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let foundSport = yield sport_1.default.findOne({ sport: req.body.sport }).exec();
            if (foundSport != undefined) {
                res.status(400).json({ "message": "Sport with specified name alredy exists" });
                return;
            }
            let sport = new sport_1.default(req.body);
            sport.save().then((sport) => {
                res.status(200).json({ 'message': 'Sport successfully added' });
            }).catch((err) => {
                res.status(400).json({ 'message': err });
            });
        });
        this.addDisciplineService = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let sport = req.body.sport;
            let discipline = req.body.discipline;
            let foundSportDiscipline = yield sport_1.default.findOne({ 'sport': sport, discipline: discipline }).exec();
            if (foundSportDiscipline != undefined) {
                res.status(400).json({ 'message': "Specified discipline alredy exists" });
                return;
            }
            sport_1.default.collection.updateOne({ 'sport': sport }, { $push: { discipline: discipline } });
            res.status(200).json({ "message": "Discipline succesffuly added" });
        });
    }
    getAllSportDiscpiline(sport, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield sport_1.default.findOne({ 'sport': sport }, { '_id': 0, 'disciplines': 1 });
                res.json(result.get("disciplines"));
                return;
            }
            catch (error) {
                res.json({ "error": "Error" });
            }
        });
    }
}
exports.SportController = SportController;
//# sourceMappingURL=sport.controller.js.map