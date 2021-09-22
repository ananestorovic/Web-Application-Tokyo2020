"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Country = new Schema({
    countryID: {
        type: Number
    },
    country: {
        type: String
    },
    countryCode: {
        type: Number
    },
    numberOfParticipants: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Country', Country, 'countries');
//# sourceMappingURL=country.js.map