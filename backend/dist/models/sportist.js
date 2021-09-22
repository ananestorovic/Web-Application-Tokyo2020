"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Sportist = new Schema({
    participantID: {
        type: Number
    },
    name: {
        type: String
    },
    sex: {
        type: String
    },
    nationality: {
        type: String
    },
    sport: {
        type: String
    },
    disciplines: {
        type: Array
    },
    medalCount: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Sportist', Sportist, 'sportists');
//# sourceMappingURL=sportist.js.map