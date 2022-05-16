import { Users } from "../../../entity/Users";
import { getManager } from "typeorm";
import ICommand from "../../../common/ICommand";


export class CreateUser implements ICommand {
    private user:Users;

    constructor(user:Users) {
        this.user = user
    }

    public execute = () => {

        let user = new Users()


        console.log("aaaa",this.user)

        user = this.user

        const status:any = getManager().getRepository('Users')
            .save(user)
            .then(user => {
                console.log(`user added success: ${user.id}`)
                return true
            })
            .catch(err => {
                console.log(`error adding : ${err}`)
                return false
            })

        return { status }
    }
}
