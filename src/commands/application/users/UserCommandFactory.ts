import {POSTCommand} from './POSTUserCommand';
import {PUTCommand} from './PUTUserCommand';
import {DELETECommand} from './DELETEUserCommand';


import ICommandConfig from '../../../common/ICommandConfig';
import ICommandFactory from '../../../common/ICommandFactory';

export class UserCommandFactory implements ICommandFactory {

    makeCommand = (config:ICommandConfig) => {

        if (config.commandName == POSTCommand.name) {
            return new POSTCommand(config.args)
        } else {
            throw new Error('Command not found!')
        }
    }
    
}


export class UserPutCommandFactory implements ICommandFactory {

    makeCommand = (config:ICommandConfig) => {

        if (config.commandName == PUTCommand.name) {
            
            return new PUTCommand(config.args)
        } else {
            throw new Error('Command not found!')
        }
    }
    
}

export class UserDeleteCommandFactory implements ICommandFactory {

    makeCommand = (config:ICommandConfig) => {

        if (config.commandName == DELETECommand.name) {
            
            return new DELETECommand(config.args)
        } else {
            throw new Error('Command not found!')
        }
    }
    
}

