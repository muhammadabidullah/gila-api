"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userOperations_1 = require("../userOperations");
const messageSender_1 = require("../messageSender");
const messagesRouter = (0, express_1.Router)();
messagesRouter.post('/send_message', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let category = req.body.category;
        let message = req.body.message;
        const users = yield userOperations_1.UserOperations.getUsersBySubscription(category);
        messageSender_1.MessageSender.sendSms(users, message, category);
        messageSender_1.MessageSender.sendEmail(users, message, category);
        messageSender_1.MessageSender.sendNotification(users, message, category);
        res.status(200).json('Message Sent and Logs History Created');
    }
    catch (error) {
        console.error(error.message);
        res.status(500).json('Server Error: ' + error.message);
    }
}));
exports.default = messagesRouter;
//# sourceMappingURL=messages.routes.js.map