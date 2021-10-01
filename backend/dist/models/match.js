"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Match = new Schema({
    competition: {
        type: String
    },
    participant1: {
        type: String
    },
    participant2: {
        type: String
    },
    result1: {
        type: String
    },
    result2: {
        type: String
    },
    done: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Match', Match, 'matchs');
//# sourceMappingURL=match.js.map