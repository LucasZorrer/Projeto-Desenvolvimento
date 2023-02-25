import {Role} from "../user.domain";

export interface UserInput {
  name: string;
  email: string;
  photoFile: string;
  role: Role;
}
