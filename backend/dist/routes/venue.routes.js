"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const venue_controller_1 = require("../controllers/venue.controller");
const venueRouter = express_1.default.Router();
venueRouter.route('/getAllVenues').get((req, res) => new venue_controller_1.VenueController().getAllVenues(req, res));
exports.default = venueRouter;
//# sourceMappingURL=venue.routes.js.map