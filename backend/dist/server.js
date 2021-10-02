"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const country_routes_1 = __importDefault(require("./routes/country.routes"));
const sportist_routes_1 = __importDefault(require("./routes/sportist.routes"));
const medal_routes_1 = __importDefault(require("./routes/medal.routes"));
const sport_routes_1 = __importDefault(require("./routes/sport.routes"));
const discipline_routes_1 = __importDefault(require("./routes/discipline.routes"));
const venue_routes_1 = __importDefault(require("./routes/venue.routes"));
const competition_routes_1 = __importDefault(require("./routes/competition.routes"));
const signed_participant_routes_1 = __importDefault(require("./routes/signed-participant.routes"));
const delegate_routes_1 = __importDefault(require("./routes/delegate.routes"));
const result_routes_1 = __importDefault(require("./routes/result.routes"));
const round_routes_1 = __importDefault(require("./routes/round.routes"));
<<<<<<< HEAD
const match_routes_1 = __importDefault(require("./routes/match.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
=======
const seed_1 = require("./seed/seed");
const app = express_1.default();
app.use(cors_1.default());
>>>>>>> 78fe8efaab98a0f6a4d6c4890c4707e99db64f93
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/tokyo2020');
const connection = mongoose_1.default.connection;
connection.once('open', () => __awaiter(this, void 0, void 0, function* () {
    console.log('mongo ok');
    yield seed_1.dropDataBase(connection);
    yield seed_1.seedDataBase(connection);
}));
const router = express_1.default.Router();
router.use('/users', user_routes_1.default);
router.use('/countries', country_routes_1.default);
router.use('/sportists', sportist_routes_1.default);
router.use('/medals', medal_routes_1.default);
router.use('/sports', sport_routes_1.default);
router.use('/disciplines', discipline_routes_1.default);
router.use('/venues', venue_routes_1.default);
router.use('/competitions', competition_routes_1.default);
router.use('/signedParticipants', signed_participant_routes_1.default);
router.use('/delegates', delegate_routes_1.default);
router.use('/results', result_routes_1.default);
router.use('/rounds', round_routes_1.default);
router.use('/matchs', match_routes_1.default);
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map