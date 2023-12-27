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
exports.MessageSender = void 0;
const message_1 = require("./message");
class MessageSender {
    static sendSms(users, message, category) {
        return __awaiter(this, void 0, void 0, function* () {
            let sms = new message_1.Sms(message, category);
            sms.send(users.filter(user => user.types.includes("SMS")).map(user => user.id));
        });
    }
    static sendEmail(users, message, category) {
        return __awaiter(this, void 0, void 0, function* () {
            let email = new message_1.Email(message, category);
            email.send(users.filter(user => user.types.includes("EMAIL")).map(user => user.id));
        });
    }
    static sendNotification(users, message, category) {
        return __awaiter(this, void 0, void 0, function* () {
            let notification = new message_1.Notification(message, category);
            notification.send(users.filter(user => user.types.includes("NOTIFICATION")).map(user => user.id));
        });
    }
}
exports.MessageSender = MessageSender;
//# sourceMappingURL=messageSender.js.map