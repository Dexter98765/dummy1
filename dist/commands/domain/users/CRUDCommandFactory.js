"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUDDeleteCommandFactory = exports.CRUDPutCommandFactory = exports.CRUDCommandFactory = void 0;
const CreateUserCommand_1 = require("./CreateUserCommand");
const UpdateUserCommand_1 = require("./UpdateUserCommand");
const DeleteUserCommand_1 = require("./DeleteUserCommand");
class CRUDCommandFactory {
    constructor() {
        this.makeCommand = (config) => {
            if (config.commandName == CreateUserCommand_1.CreateUser.name) {
                return new CreateUserCommand_1.CreateUser(config.args);
            }
            else {
                throw new Error('Command not found!');
            }
        };
    }
}
exports.CRUDCommandFactory = CRUDCommandFactory;
class CRUDPutCommandFactory {
    constructor() {
        this.makeCommand = (config) => {
            if (config.commandName == UpdateUserCommand_1.UpdateUser.name) {
                return new UpdateUserCommand_1.UpdateUser(config.args);
            }
            else {
                throw new Error('Command not found!');
            }
        };
    }
}
exports.CRUDPutCommandFactory = CRUDPutCommandFactory;
class CRUDDeleteCommandFactory {
    constructor() {
        this.makeCommand = (config) => {
            if (config.commandName == DeleteUserCommand_1.DeleteUser.name) {
                return new DeleteUserCommand_1.DeleteUser(config.args);
            }
            else {
                throw new Error('Command not found!');
            }
        };
    }
}
exports.CRUDDeleteCommandFactory = CRUDDeleteCommandFactory;
