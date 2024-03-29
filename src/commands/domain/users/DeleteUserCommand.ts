
import { getManager } from "typeorm";
import ICommand from "../../../common/ICommand";


export class DeleteUser implements ICommand {
    private user:string;

    constructor(user:string) {
        this.user = user
    }

    public execute = () => {

        
        const userId:string = this.user


        const status:any = getManager().getRepository('Users')
        .createQueryBuilder()
            .delete()
            .where("id = :id", { id: userId})
            .execute()
            .then(() => {
                console.log(`user delete success`)
                return true
            })
            .catch(err => {
                console.log(`error deleting: ${err}`)
                return false
            })

        return { status }
    }
}
