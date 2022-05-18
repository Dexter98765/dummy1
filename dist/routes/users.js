"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = express_1.default.Router();
const UserCommands = __importStar(require("../commands/application/users"));
const QueryCommands = __importStar(require("../queries/users/GetUserCommand"));
const userCommandFactory = new UserCommands.UserCommandFactory();
const userUpdateCommandFactory = new UserCommands.UserPutCommandFactory();
const userDeleteCommandFactory = new UserCommands.UserDeleteCommandFactory();
//const userQueryCommandFactory = new QueryCommands.GETCommand();
userRouter.get('/', (req, res) => {
    res.send('hello from users');
});
userRouter.post('/create', (req, res) => {
    let statusCode;
    try {
        console.log(req.body);
        const user = req.body;
        const commandName = 'POSTCommand';
        const commandConfig = {
            commandName,
            args: user
        };
        const command = userCommandFactory.makeCommand(commandConfig);
        const results = command.execute();
        statusCode = results.status ? 200 : 500;
        res.status(statusCode).json({ message: 'User added successfully', data: {} });
    }
    catch (e) {
        res.status(statusCode).json({ error: e.message, data: {} });
    }
});
userRouter.put('/update/:id', (req, res) => {
    let statusCode;
    try {
        const user = Object.assign(Object.assign({}, req.body), req.params);
        const commandName = 'PUTCommand';
        const commandConfig = {
            commandName,
            args: user
        };
        const command = userUpdateCommandFactory.makeCommand(commandConfig);
        const results = command.execute();
        statusCode = results.status ? 200 : 500;
        res.status(statusCode).json({ message: 'User updated successfully', data: {} });
    }
    catch (e) {
        res.status(statusCode).json({ error: e.message, data: {} });
    }
});
userRouter.delete('/delete/:id', (req, res) => {
    let statusCode;
    try {
        const user = req.params.id;
        const commandName = 'DELETECommand';
        const commandConfig = {
            commandName,
            args: user
        };
        const command = userDeleteCommandFactory.makeCommand(commandConfig);
        const results = command.execute();
        statusCode = results.status ? 200 : 500;
        res.status(statusCode).json({ message: 'User deleted successfully', data: {} });
    }
    catch (e) {
        res.status(statusCode).json({ error: e.message, data: {} });
    }
});
userRouter.get('/getUsers/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield QueryCommands.GETCommand(req.params.id);
        res.status(200).json({ message: 'Success', data: results });
    }
    catch (e) {
        res.status(500).json({ error: e.message, data: {} });
    }
}));
exports.default = userRouter;
