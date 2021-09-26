"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Round = new Schema({
    competition: {
        type: String
    },
    results: {
        type: Array
    },
    participants: {
        type: Array
    },
    numRound: {
        type: Number
    },
    isFinal: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Round', Round, 'rounds');
//# sourceMappingURL=round.js.map