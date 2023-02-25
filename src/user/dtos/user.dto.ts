import { Role } from "../user.domain";

export interface UserDto {
  name: string;
  email: string;
  photoFile: string;
  registration: string;
  role: Role;
}
