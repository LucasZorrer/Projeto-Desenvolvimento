import { PayLoad } from "../dtos/user-payload.dto";
import { UserRepos } from "../user.repositories"

export class ListAllUsersUserCase {

    constructor(private userRepo: UserRepos){
    }

    async execute(userPayLoad: PayLoad): Promise<CreateUserOutput>{
        if(userPayLoad.role !== "ADMIN"){
            throw new Error("You don't have permition")
          }
        const users = await this.userRepo.listAll();
        return users;
    }
}

type CreateUserOutput = {
    name: string;
    email: string;
    photoFile: string;
}[];