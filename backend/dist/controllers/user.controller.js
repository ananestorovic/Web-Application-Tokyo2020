"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
class UserController {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            user_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.register = (req, res) => {
            let user = new user_1.default(req.body);
            user.save().then((user) => {
                res.status(200).json({ 'message': 'user added' });
            }).catch((err) => {
                res.status(400).json({ 'message': err });
            });
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map