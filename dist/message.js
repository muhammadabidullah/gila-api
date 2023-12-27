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
exports.Sms = exports.Email = exports.Notification = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class Message {
    constructor(theText, theCategory) {
        this.text = theText;
        this.category = theCategory;
    }
    log(ids) {
        ids.forEach((id) => __awaiter(this, void 0, void 0, function* () {
            yield prisma.logHistory.create({
                data: {
                    userId: id,
                    message: this.text,
                    type: this.type,
                    category: this.category
                },
            });
        }));
    }
}
class Sms extends Message {
    constructor(text, category) {
        super(text, category);
        this.type = 'SMS';
    }
    send(ids) {
        // External API code here for sending SMS
        super.log(ids);
    }
}
exports.Sms = Sms;
class Email extends Message {
    constructor(text, category) {
        super(text, category);
        this.type = 'EMAIL';
    }
    send(ids) {
        // External API code here for sending EMAIL
        super.log(ids);
    }
}
exports.Email = Email;
class Notification extends Message {
    constructor(text, category) {
        super(text, category);
        this.type = 'NOTIFICATION';
    }
    send(ids) {
        // External API code here for sending Push Notification
        super.log(ids);
    }
}
exports.Notification = Notification;
//# sourceMappingURL=message.js.map