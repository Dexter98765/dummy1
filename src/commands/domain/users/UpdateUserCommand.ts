import { Users } from "../../../entity/Users";
import { getManager } from "typeorm";
import ICommand from "../../../common/ICommand";


export class UpdateUser implements ICommand {
    private user:Users;

    constructor(user:Users) {
        this.user = user
    }

    public execute = () => {

        let user = new Users()


        user = this.user
        


        const status:any = getManager().getRepository('Users')
        .createQueryBuilder()
            .update()
            .set({
                firstName:user.firstName,
                lastName:user.lastName,
                age:user.age
            })
            .where("id = :id", { id: user.id })
            .execute()
            .then(() => {
                console.log(`user update success`)
                return true
            })
            .catch(err => {
                console.log(`error updating: ${err}`)
                return false
            })

        return { status }
    }
}
