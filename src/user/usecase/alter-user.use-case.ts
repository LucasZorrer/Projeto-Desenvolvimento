import { UserData } from "../dtos/user-data.dto"
import { UserRepos } from "../user.repositories"
import { UserInput } from "../dtos/user-input.dto"
import { User } from "../domain/user.domain"

export class AlterUserUseCase {
  constructor(private userRepo: UserRepos) {}

  async execute(input: UserInput, registration: string): Promise<UserData> {
    const user = new User(input).getValue()
    const userAlter = await this.userRepo.alter(user, registration)
    return userAlter
  }
}
