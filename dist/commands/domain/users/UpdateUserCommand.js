"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = void 0;
const Users_1 = require("../../../entity/Users");
const typeorm_1 = require("typeorm");
class UpdateUser {
    constructor(user) {
        this.execute = () => {
            let user = new Users_1.Users();
            user = this.user;
            console.log("balu", user);
            const status = (0, typeorm_1.getManager)().getRepository('Users')
                .createQueryBuilder()
                .update()
                .set({
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age
            })
                .where("id = :id", { id: user.id })
                .execute()
                .then(user => {
                console.log(`user update success`);
                return true;
            })
                .catch(err => {
                console.log(`error adding game: ${err}`);
                return false;
            });
            return { status };
        };
        this.user = user;
    }
}
exports.UpdateUser = UpdateUser;
