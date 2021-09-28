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
const discipline_1 = __importDefault(require("../models/discipline"));
class DisciplineController {
    constructor() {
        this.addDisciplineService = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let foundDiscipline = yield discipline_1.default.findOne({ discipline: req.body.discipline, sport: req.body.sport }).exec();
            if (foundDiscipline != undefined) {
                res.status(400).json({ "message": "Specified discipline name already exists in specified sport" });
                return;
            }
            let discipline = new discipline_1.default(req.body);
            console.log(discipline);
            discipline.save().then((discipline) => {
                console.log(discipline);
                console.log("USPEO DA NAPRAVI");
                res.status(200).json({ 'message': 'Discipline successfully added' });
            }).catch((err) => {
                res.status(400).json({ 'message': err });
            });
        });
        this.getAllDisciplines = (req, res) => {
            discipline_1.default.find({}, (err, disciplines) => {
                if (err)
                    console.log(err);
                else {
                    res.json(disciplines);
                }
            });
        };
        this.getAllIndividualDisciplines = (req, res) => {
            discipline_1.default.distinct("sport", { 'minNumPlayers': 1, 'maxNumPlayers': 1 }, (err, disciplines) => {
                console.log(disciplines);
                if (err)
                    console.log(err);
                else {
                    res.json(disciplines);
                }
            });
        };
    }
}
exports.DisciplineController = DisciplineController;
//# sourceMappingURL=discipline.controller.js.map