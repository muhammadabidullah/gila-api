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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const alice = yield prisma.user.upsert({
            where: { email: 'alice@prisma.io' },
            update: {},
            create: {
                email: 'alice@prisma.io',
                name: 'Alice',
                phone: '65653653',
                subscribed: ['FINANCE', 'MOVIES'],
                types: ['EMAIL', 'SMS']
            }
        });
        const bob = yield prisma.user.upsert({
            where: { email: 'bob@prisma.io' },
            update: {},
            create: {
                email: 'bob@prisma.io',
                name: 'Bob',
                phone: '548214',
                subscribed: ['FINANCE', 'SPORTS'],
                types: ['NOTIFICATION', 'SMS']
            },
        });
        const nick = yield prisma.user.upsert({
            where: { email: 'nick@prisma.io' },
            update: {},
            create: {
                email: 'nick@prisma.io',
                name: 'Nick',
                phone: '6835545',
                subscribed: ['SPORTS'],
                types: ['NOTIFICATION']
            },
        });
        const john = yield prisma.user.upsert({
            where: { email: 'john@prisma.io' },
            update: {},
            create: {
                email: 'john@prisma.io',
                name: 'John',
                phone: '64343545',
                subscribed: ['FINANCE', 'SPORTS', 'MOVIES'],
                types: ['NOTIFICATION', 'SMS', 'EMAIL']
            },
        });
        const beth = yield prisma.user.upsert({
            where: { email: 'beth@prisma.io' },
            update: {},
            create: {
                email: 'beth@prisma.io',
                name: 'Beth',
                phone: '4554455452',
                subscribed: ['SPORTS', 'MOVIES'],
                types: ['SMS']
            },
        });
        console.log({ alice, bob, nick, john, beth });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
//# sourceMappingURL=seed.js.map