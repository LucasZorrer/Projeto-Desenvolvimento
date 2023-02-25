import jwt from "jsonwebtoken";
import CONFIG from "../../config/environments";
import { PayLoad } from "../user/dtos/user-payload.dto";

export class Jwt {
  static create(payLoad: PayLoad) {
    return jwt.sign(payLoad, CONFIG.JWT_KEY);
  }
}
