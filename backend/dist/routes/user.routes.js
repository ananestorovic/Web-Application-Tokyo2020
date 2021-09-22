"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
userRouter.route('/loginService').post((req, res) => new user_controller_1.UserController().loginService(req, res));
userRouter.route('/registerService').post((req, res) => new user_controller_1.UserController().registerService(req, res));
userRouter.route('/findUser').post((req, res) => new user_controller_1.UserController().findUser(req, res));
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map