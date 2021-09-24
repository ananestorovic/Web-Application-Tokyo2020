"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Competition = new Schema({
    name: {
        type: String
    },
    sport: {
        type: String
    },
    discipline: {
        type: String
    },
    sex: {
        type: String
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    venue: {
        type: [String]
    },
    format: {
        type: String
    },
    delegate: {
        type: String
    },
    signedParticipants: {
        type: Array
    },
    formed: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Competition', Competition, 'competitions');
//# sourceMappingURL=competition.js.map