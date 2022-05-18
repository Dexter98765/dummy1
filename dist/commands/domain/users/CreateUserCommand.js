"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const Users_1 = require("../../../entity/Users");
const typeorm_1 = require("typeorm");
class CreateUser {
    constructor(user) {
        this.execute = () => {
            let user = new Users_1.Users();
            user = this.user;
            const status = (0, typeorm_1.getManager)().getRepository('Users')
                .save(user)
                .then(user => {
                console.log(`user added success: ${user.id}`);
                return true;
            })
                .catch(err => {
                console.log(`error adding : ${err}`);
                return false;
            });
            return { status };
        };
        this.user = user;
    }
}
exports.CreateUser = CreateUser;
