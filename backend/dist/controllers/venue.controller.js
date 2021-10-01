"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenueController = void 0;
const venue_1 = __importDefault(require("../models/venue"));
class VenueController {
    constructor() {
        this.getAllVenues = (req, res) => {
            venue_1.default.find({}, (err, venues) => {
                console.log(venues);
                if (err)
                    console.log(err);
                else
                    res.json(venues);
            });
        };
    }
}
exports.VenueController = VenueController;
//# sourceMappingURL=venue.controller.js.map