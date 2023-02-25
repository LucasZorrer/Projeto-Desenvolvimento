import { describe, it, expect } from "vitest";
import { PrismaUserRepos } from "../../implements/Prisma.user.repos";
import {faker} from "@faker-js/faker"
import { CreateUserUseCase } from "../create-user.use-case";
import {Role }from "../../user.domain";
import {Roles} from "../../user.domain"
describe("Test if user is created", async () => {
  const repos =  new PrismaUserRepos();
    it("Test if user is created", async () => {
      const output = faker.name.firstName();
      const input = {
        name: output,
        email: faker.internet.email(),
        photoFile: faker.internet.avatar(),
        role: new Role(Roles.admin)
      }
      const useCase = await new CreateUserUseCase(repos).execute(input, {name:"Pedro", photoFile: faker.internet.avatar(), role: "ADMIN"});
      const result = await repos.listById(useCase.registration);
      
      expect(result?.name).toBe(output);
    });

    it("Test if user is created", async () => {
      const output = faker.name.firstName();
      const input = {
        name: output,
        email: faker.internet.email(),
        photoFile: faker.internet.avatar(),
        role: new Role(Roles.admin)
      }
      expect(async()=>{
        await new CreateUserUseCase(repos).execute(input, {name:"Pedro", photoFile: faker.internet.avatar(), role: "USER"});
      }).rejects.toThrow("You don't have permition");
    });
  });
  