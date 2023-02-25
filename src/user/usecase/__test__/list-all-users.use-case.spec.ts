// import { ListAllUsersUserCase } from "../list-all-users.use-case";
// import { describe, it, expect } from "vitest";
// import { faker } from "@faker-js/faker";
// import { PrismaUserRepos } from "../../implements/Prisma.user.repos";
// import {Role }from "../../user.domain";
// import {Roles} from "../../user.domain"

// describe("List All Users Tests", async () => {
//   it("Test if all users have been listed", async () => {
//     const repos = new PrismaUserRepos();
//     const listAllUseCase = new ListAllUsersUserCase(repos);
//     const output = await listAllUseCase.execute({
//       name: "Pedro",
//       photoFile: faker.internet.avatar(),
//       role: "ADMIN",
//     });
//     const userQuant = await repos.listAll();
//     expect(output.length).toBe(userQuant.length);
//   });
//   it("Throw new Error", async () => {
//     const repos = new PrismaUserRepos();
//     const listAllUseCase = new ListAllUsersUserCase(repos);
//     const output = await listAllUseCase.execute({
//       name: "Pedro",
//       photoFile: faker.internet.avatar(),
//       role: new Role(Roles.admin)
//     });
//     expect(output).rejects.toThrow("You don't have permition");
//   });
// });
