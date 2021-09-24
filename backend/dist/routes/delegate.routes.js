"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const delegate_controller_1 = require("../controllers/delegate.controller");
const delegateRouter = express_1.default.Router();
delegateRouter.route('/getAllDelegates').get((req, res) => new delegate_controller_1.DelegateController().getAllDelegates(req, res));
delegateRouter.route('/incrementDelegate').post((req, res) => new delegate_controller_1.DelegateController().incrementDelegate(req, res));
exports.default = delegateRouter;
//# sourceMappingURL=delegate.routes.js.map