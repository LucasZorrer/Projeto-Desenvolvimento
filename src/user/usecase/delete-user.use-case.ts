import { UserRepos } from "../user.repositories";
import { PayLoad } from "../dtos/user-payload.dto";

export class DeleteUserUseCase {
  constructor(private userRepo: UserRepos) {}

  async execute(registration: string, userPayLoad: PayLoad): Promise<void> {
    try {
      this.verifyUser(registration);
      this.verifyRole(userPayLoad);
      await this.userRepo.delete(registration);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  verifyRole(userPayLoad: PayLoad) {
    if (userPayLoad.role !== "ADMIN") {
      throw new Error("You don't have permition");
    }
  }

  async verifyUser(registration: string) {
    const result = await this.userRepo.listById(registration);
    if (result == null) {
      throw new Error("Error!");
    }
  }
}
