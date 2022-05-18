"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = void 0;
const typeorm_1 = require("typeorm");
class DeleteUser {
    constructor(user) {
        this.execute = () => {
            const userId = this.user;
            const status = (0, typeorm_1.getManager)().getRepository('Users')
                .createQueryBuilder()
                .delete()
                .where("id = :id", { id: userId })
                .execute()
                .then(() => {
                console.log(`user delete success`);
                return true;
            })
                .catch(err => {
                console.log(`error deleting: ${err}`);
                return false;
            });
            return { status };
        };
        this.user = user;
    }
}
exports.DeleteUser = DeleteUser;
