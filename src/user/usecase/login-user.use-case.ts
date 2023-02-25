import { UserRepos } from "../user.repositories";
import { Jwt } from "../../utils/Jwt";

interface LoginData {
  email: string;
  registration: string;
}

export class LoginUserUseCase {
  constructor(private userRepo: UserRepos) {}

  async execute(loginData: LoginData): Promise<string> {
    try {
      await this.validation(loginData);
      
      const user = await this.userRepo.listByEmail(loginData.email);
      if (!user) {
        throw new Error("Email not found");
      }
      if (user.registration !== loginData.registration) {
        throw new Error("Invalid Passowrd");
      }
      const payLaod = {
        name: user.name,
        photoFile: user.photoFile,
        role: user.role,
      };
      return Jwt.create(payLaod);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async validation(loginData: LoginData) {
    if (!loginData.email) {
      throw new Error("Email is requirer");
    }
    if (!loginData.registration) {
      throw new Error("Password is required");
    }
  }

  verifyUser(registration: string) {
    const result = this.userRepo.listById(registration);
    if (result == null) {
      throw new Error("Error!");
    }
  }
}
