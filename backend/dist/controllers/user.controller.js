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
const user_1 = __importDefault(require("../models/user"));
class UserController {
    constructor() {
        this.loginService = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            user_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.registerService = (req, res) => {
            let user = new user_1.default(req.body);
            user.save().then((user) => {
                console.log(user);
                res.status(200).json({ 'message': 'user added' });
            }).catch((err) => {
                console.log("greska");
                res.status(400).json({ 'message': err });
            });
        };
        this.findUser = (req, res) => {
            let username = req.body.username;
            user_1.default.findOne({ 'username': username }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json(users);
            });
        };
        this.changePassword = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            user_1.default.collection.updateOne({ 'username': username }, { $set: { 'password': password } });
            res.json({ 'message': 'password changed' });
        };
        this.getDelegates = (req, res) => {
            user_1.default.find({ 'type': "Delegate" }, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    res.json(users);
                }
            });
        };
        this.getNotApprovedUsers = (req, res) => {
            user_1.default.find({ 'approved': 0, 'type': req.params.type }, (err, users) => {
                console.log("usao");
                console.log(users);
                if (err)
                    console.log(err);
                else
                    res.json(users);
            });
        };
        this.approveUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let username = req.body.username;
            let userToApprove = yield user_1.default.findOne({ 'username': username }).exec();
            if (userToApprove.get("approved") == 1) {
                res.status(400).json({ "message": "User already approved" });
                return;
            }
            if (userToApprove.get("type") == "Leader") {
                let foundapprovedSameCountry = yield user_1.default.findOne({
                    'type': "Leader",
                    'country': userToApprove.get("country"),
                    'approved': 1
                }).exec();
                if (foundapprovedSameCountry != undefined) {
                    res.status(400).json({ "message": "User country leader already set" });
                    return;
                }
            }
            user_1.default.updateOne({ 'username': username }, { $set: { 'approved': 1 } }, (err, info) => {
                console.log(info);
                if (err)
                    console.log(err);
                else
                    res.status(200).json({ "message": "User successfully approved" });
            });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map