import { UserDto } from "./dtos/user.dto";
import { User } from "@prisma/client";
export interface UserRepos {
  save(userData: UserDto): Promise<User>;
  alter(userData: UserDto, registration: string): Promise<User>;
  delete(registration: string): Promise<void>;
  listAll(): Promise<User[]>;
  listById(registration: string): Promise<User | null>;
  listByEmail(email: string): Promise<User | null>;
}
