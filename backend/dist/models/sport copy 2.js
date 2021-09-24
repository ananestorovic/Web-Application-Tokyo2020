"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Discipline = new Schema({
    sport: {
        type: String
    },
    discipline: {
        type: String
    },
    type: {
        type: String
    },
    minNumPlayers: {
        type: Number
    },
    maxNumPlayers: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Discipline', Discipline, 'disciplines');
//# sourceMappingURL=sport%20copy%202.js.map