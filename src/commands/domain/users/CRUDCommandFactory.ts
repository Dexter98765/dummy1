import { CreateUser } from './CreateUserCommand'
import { UpdateUser } from './UpdateUserCommand'
import { DeleteUser } from './DeleteUserCommand'

import ICommandConfig from '../../../common/ICommandConfig'
import ICommandFactory from '../../../common/ICommandFactory'


export class CRUDCommandFactory implements ICommandFactory {
    makeCommand = (config:ICommandConfig) => {
        if (config.commandName == CreateUser.name) {
            return new CreateUser(config.args)
        } else {
            throw new Error('Command not found!')
        }
    }
}

export class CRUDPutCommandFactory implements ICommandFactory {
    makeCommand = (config:ICommandConfig) => {
        if (config.commandName == UpdateUser.name) {
            return new UpdateUser(config.args)
        } else {
            throw new Error('Command not found!')
        }
    }
}

export class CRUDDeleteCommandFactory implements ICommandFactory {
    makeCommand = (config:ICommandConfig) => {
        if (config.commandName == DeleteUser.name) {
            return new DeleteUser(config.args)
        } else {
            throw new Error('Command not found!')
        }
    }
}