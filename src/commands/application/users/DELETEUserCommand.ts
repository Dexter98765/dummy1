


import * as DomainUserCommands from '../../domain/users';
import ICommand from "../../../common/ICommand";

export class DELETECommand implements ICommand {

    
    private user:string;

    constructor(user:string) {
        this.user = user
    }


    public execute = () => {
        const crudCommandFactory = new DomainUserCommands.CRUDDeleteCommandFactory()
        
        const commandName = DomainUserCommands.DeleteUser.name

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


