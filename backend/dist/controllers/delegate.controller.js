"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelegateController = void 0;
const delegate_1 = __importDefault(require("../models/delegate"));
class DelegateController {
    constructor() {
        this.getAllDelegates = (req, res) => {
            delegate_1.default.find({ 'number': { $in: [0, 1, 2] } }, (err, delegates) => {
                if (err)
                    console.log(err);
                else {
                    res.json(delegates);
                }
            });
        };
        this.incrementDelegate = (req, res) => {
            let name = req.body.name;
            delegate_1.default.updateOne({ 'name': name }, { $inc: { 'number': 1 } }, (err, info) => {
                console.log(err);
                console.log(info);
            });
            res.json({ 'message': 'number increment' });
        };
    }
}
exports.DelegateController = DelegateController;
//# sourceMappingURL=delegate.controller.js.map