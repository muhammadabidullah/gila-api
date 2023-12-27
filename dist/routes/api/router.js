"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appRouter = express_1.default.Router();
const user_1 = __importDefault(require("./user"));
appRouter.use('/users', user_1.default);
// appRouter.post('/', async (req, res) => {
//   const user = await prisma.user.create({ data: req.body });
//   res.json(user);
// });
exports.default = appRouter;
//# sourceMappingURL=router.js.map