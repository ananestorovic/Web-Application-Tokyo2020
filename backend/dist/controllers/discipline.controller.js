"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discipline_1 = __importDefault(require("../models/discipline"));
class DisciplineController {
    constructor() {
        this.addDisciplineService = (req, res) => {
            let discipline = new discipline_1.default(req.body);
            console.log(discipline);
            discipline.save().then((discipline) => {
                console.log(discipline);
                console.log("USPEO DA NAPRAVI");
                res.status(200).json({ 'message': 'discipline added' });
            }).catch((err) => {
                res.status(400).json({ 'message': err });
            });
        };
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