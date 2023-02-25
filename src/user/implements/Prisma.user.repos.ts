import { UserDto } from "../dtos/user.dto";
import { UserRepos } from "../user.repositories";
import { PrismaClient, User } from "@prisma/client";
import { Role } from "../user.domain";
const prisma = new PrismaClient();

export class PrismaUserRepos implements UserRepos {
  async save(userData: UserDto): Promise<User> {
    return await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        photoFile: userData.photoFile,
        registration: userData.registration,
        role: userData.role.value,
      },
    });
  }
  async alter(userData: UserDto, registration: string): Promise<User> {
    return await prisma.user.update({
      where: {
        registration: registration,
      },
      data: {
        name: userData.name,
        email: userData.email,
        photoFile: userData.photoFile,
      },
    });
  }
  async delete(registration: string): Promise<void> {
    await prisma.user.delete({
      where: {
        registration: registration,
      },
    });
  }
  async listAll(): Promise<User[]> {
    return await prisma.user.findMany();
  }
  async listById(registration: string): Promise<User | null> {
    return await prisma.user.findFirst({
      where: {
        registration: registration,
      },
    });
  }
  async listByEmail(email: string): Promise<User | null> {
    return await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
  }
}
