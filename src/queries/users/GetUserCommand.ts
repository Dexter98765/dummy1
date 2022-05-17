
import { getManager } from "typeorm";


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



