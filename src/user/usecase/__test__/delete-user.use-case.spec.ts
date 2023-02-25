// import { describe, it, expect } from "vitest";
// import { PrismaUserRepos } from "../../implements/Prisma.user.repos";
// import {faker} from "@faker-js/faker"
// import { CreateUserUseCase } from "../create-user.use-case";
// import { DeleteUserUseCase } from "../delete-user.use-case";
// import {Role }from "../../user.domain";
// import {Roles} from "../../user.domain"

// describe("Test if user have been deleted", async () => {
//     const repos =  new PrismaUserRepos();

//     it("Test if user is deleted", async () => {
//         const input = {
//           name: faker.name.firstName(),
//           email: faker.internet.email(),
//           photoFile: faker.internet.avatar(),
//           role: new Role(Roles.admin)
//         }
//         const payload = {name:"Pedro", photoFile: faker.internet.avatar(), role: "ADMIN"}
//         const User = await new CreateUserUseCase(repos).execute(input, payload);
//         await new DeleteUserUseCase(repos).execute(User.registration, payload)
//         const VerifyIfUserWasDeleted = await repos.listById(User.registration)

//         expect(VerifyIfUserWasDeleted).toBe(null)
        
//     })
// })