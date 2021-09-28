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
const sport_1 = __importDefault(require("../models/sport"));
const sports_seed_1 = __importDefault(require("./sports_seed"));
const sportists_seed_1 = __importDefault(require("./sportists_seed"));
const sportist_1 = __importDefault(require("../models/sportist"));
const country_1 = __importDefault(require("../models/country"));
const countries_seed_1 = __importDefault(require("./countries_seed"));
const discipline_1 = __importDefault(require("../models/discipline"));
const disciplines_seed_1 = __importDefault(require("./disciplines_seed"));
const users_seed_1 = __importDefault(require("./users_seed"));
const user_1 = __importDefault(require("../models/user"));
const medal_seed_1 = __importDefault(require("./medal_seed"));
const medal_1 = __importDefault(require("../models/medal"));
const venues_seed_1 = __importDefault(require("./venues_seed"));
const venue_1 = __importDefault(require("../models/venue"));
const delegates_seed_1 = __importDefault(require("./delegates_seed"));
const delegate_1 = __importDefault(require("../models/delegate"));
function dropDataBase(connection) {
    return __awaiter(this, void 0, void 0, function* () {
        yield connection.db.dropDatabase();
    });
}
exports.dropDataBase = dropDataBase;
function seedSports() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let index = 0; index < sports_seed_1.default.length; index++) {
            const element = sports_seed_1.default[index];
            yield new sport_1.default(element).save();
        }
    });
}
function seedSportists() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let index = 0; index < sportists_seed_1.default.length; index++) {
            const element = sportists_seed_1.default[index];
            yield new sportist_1.default(element).save();
        }
    });
}
function seedCountries() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let index = 0; index < countries_seed_1.default.length; index++) {
            const element = countries_seed_1.default[index];
            yield new country_1.default(element).save();
        }
    });
}
function seedDiscipline() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let index = 0; index < disciplines_seed_1.default.length; index++) {
            const element = disciplines_seed_1.default[index];
            yield new discipline_1.default(element).save();
        }
    });
}
function seedUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            for (let index = 0; index < users_seed_1.default.length; index++) {
                const element = users_seed_1.default[index];
                yield new user_1.default(element).save();
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
function seedMedals() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let index = 0; index < medal_seed_1.default.length; index++) {
            const element = medal_seed_1.default[index];
            yield new medal_1.default(element).save();
        }
    });
}
function seedVenues() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let index = 0; index < venues_seed_1.default.length; index++) {
            const element = venues_seed_1.default[index];
            yield new venue_1.default(element).save();
        }
    });
}
function seedDelegates() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let index = 0; index < delegates_seed_1.default.length; index++) {
            const element = delegates_seed_1.default[index];
            yield new delegate_1.default(element).save();
        }
    });
}
function seedDataBase(connection) {
    return __awaiter(this, void 0, void 0, function* () {
        yield seedSports();
        yield seedDiscipline();
        yield seedSportists();
        yield seedCountries();
        yield seedUsers();
        yield seedMedals();
        yield seedVenues();
    });
}
exports.seedDataBase = seedDataBase;
//# sourceMappingURL=seed.js.map