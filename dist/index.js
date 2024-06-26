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
function createUser(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield prisma.user.create({
                data: {
                    username,
                    email,
                    password,
                },
            });
            console.log({ result });
        }
        catch (error) {
            console.log('error, ', error);
        }
    });
}
function getTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield prisma.todos.findMany({
                where: {
                    userId: id,
                },
            });
            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function getTodosAndUserDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield prisma.todos.findMany({
                where: {
                    userId: id,
                },
                select: {
                    title: true,
                    description: true,
                    // done: true,
                    user: {
                        select: {
                            username: true,
                            // email: true,
                        },
                    },
                },
            });
            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
    });
}
// createUser('djfk12d', 'dk23fj@test.com', 'dkfa23j');
// getTodo(1);
getTodosAndUserDetails(1);
