

import { Users } from "../../../entity/Users";
import * as DomainUserCommands from '../../domain/users';
import ICommand from "../../../common/ICommand";

export class PUTCommand implements ICommand {

    
    private user:Users;

    constructor(user:Users) {
        this.user = user
    }


    public execute = () => {
        const crudCommandFactory = new DomainUserCommands.CRUDPutCommandFactory()
        
        const commandName = DomainUserCommands.UpdateUser.name

        const config = {
            commandName,
            args: this.user
        }
        const command = crudCommandFactory.makeCommand(config)

        const results = command.execute()

        return results.status ?
            { status: true } : 
            { status: false }
    }
}


