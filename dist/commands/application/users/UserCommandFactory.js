"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDeleteCommandFactory = exports.UserPutCommandFactory = exports.UserCommandFactory = void 0;
const POSTUserCommand_1 = require("./POSTUserCommand");
const PUTUserCommand_1 = require("./PUTUserCommand");
const DELETEUserCommand_1 = require("./DELETEUserCommand");
class UserCommandFactory {
    constructor() {
        this.makeCommand = (config) => {
            if (config.commandName == POSTUserCommand_1.POSTCommand.name) {
                return new POSTUserCommand_1.POSTCommand(config.args);
            }
            else {
                throw new Error('Command not found!');
            }
        };
    }
}
exports.UserCommandFactory = UserCommandFactory;
class UserPutCommandFactory {
    constructor() {
        this.makeCommand = (config) => {
            if (config.commandName == PUTUserCommand_1.PUTCommand.name) {
                return new PUTUserCommand_1.PUTCommand(config.args);
            }
            else {
                throw new Error('Command not found!');
            }
        };
    }
}
exports.UserPutCommandFactory = UserPutCommandFactory;
class UserDeleteCommandFactory {
    constructor() {
        this.makeCommand = (config) => {
            if (config.commandName == DELETEUserCommand_1.DELETECommand.name) {
                return new DELETEUserCommand_1.DELETECommand(config.args);
            }
            else {
                throw new Error('Command not found!');
            }
        };
    }
}
exports.UserDeleteCommandFactory = UserDeleteCommandFactory;
