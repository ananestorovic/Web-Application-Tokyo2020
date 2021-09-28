"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Medal = new Schema({
    country: {
        type: String
    },
    numGold: {
        type: Number
    },
    numSilver: {
        type: Number
    },
    numBronze: {
        type: Number
    },
    sum: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Medal', Medal, 'medals');
//# sourceMappingURL=medal.js.map