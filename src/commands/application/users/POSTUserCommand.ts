

import { Users } from "../../../entity/Users";
import * as DomainUserCommands from '../../domain/users';
import ICommand from "../../../common/ICommand";

export class POSTCommand implements ICommand {
    private user:Users;

    constructor(user:Users) {
        this.user = user
    }

    public execute = () => {
        const crudCommandFactory = new DomainUserCommands.CRUDCommandFactory()
        
        const commandName = DomainUserCommands.CreateUser.name

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



