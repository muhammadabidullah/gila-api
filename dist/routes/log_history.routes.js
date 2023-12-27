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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const logsRouter = (0, express_1.Router)();
logsRouter.post('/send_message', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body.category);
    const users = yield prisma.user.findMany({
        where: {
            subscribed: {
                hasEvery: req.body.category
            }
        }
    });
    const email_users = users.filter(user => user.types.includes("EMAIL"));
    const sms_users = users.filter(user => user.types.includes("SMS"));
    const notification_users = users.filter(user => user.types.includes("NOTIFICATION"));
    console.log(email_users.map(user => user.id));
    console.log(sms_users.map(user => user.id));
    console.log(notification_users.map(user => user.id));
    // users.forEach((user) => {
    //   user.types.forEach((type) => {
    //     console.log(type);
    //   })
    // })
    res.json(users);
}));
exports.default = logsRouter;
//# sourceMappingURL=log_history.routes.js.map