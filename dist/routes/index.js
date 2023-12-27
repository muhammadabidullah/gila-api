"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const messages_routes_1 = __importDefault(require("./messages.routes"));
const routes = (0, express_1.Router)();
routes.use('/users', user_routes_1.default);
routes.use('/messages', messages_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map