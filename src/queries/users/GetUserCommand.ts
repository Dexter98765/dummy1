import { Users } from "../../entity/Users";
import { getManager } from "typeorm";
import ICommand from "../../common/ICommand";

export const GETCommand = async (userId: string) => {
    if(Number(userId) != 0) {
        return await getManager().getRepository('Users')
        .createQueryBuilder()
            .where("id = :id", { id: userId})
            .getRawOne();
    }
    return await getManager().getRepository('Users')
    .createQueryBuilder()
        .getRawMany();
  };



