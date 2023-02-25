import { User } from "../domain/user.domain";
import { UserData } from "../dtos/user-data.dto";
import { UserInput } from "../dtos/user-input.dto";
import { PayLoad } from "../dtos/user-payload.dto";
import { UserRepos } from "../user.repositories";


export class CreateUserUseCase {
  constructor(private userRepo: UserRepos) {}

  async execute(input: UserInput, userPayLoad: PayLoad): Promise<UserData> {
    if(await this.userRepo.listByEmail(input.email)){
      throw new Error("This email already used")
    }
    if(userPayLoad.role !== "ADMIN"){
      throw new Error("You don't have permition")
    }
    const user = new User(input).getValue();
    const newUser = await this.userRepo.save(user);
    return newUser;
  }
}
