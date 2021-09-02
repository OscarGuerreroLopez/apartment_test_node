import { UserService } from "./";
import {
  completeFakeUser,
  completeFakeUserResult,
  completeFakeUsers,
  completeFakeUsersResult
} from "../../test/generators/makeFakeUser";
import { User } from "../../entities/user";

jest.mock("../../infra/db/databaseMethods.ts", () => {
  const DatabaseMethods = (): Readonly<{
    find: (collection: string, where?: IObjectLiteral) => Promise<User[]>;
    findOne: (collection: string, where: IObjectLiteral) => Promise<User>;
  }> => {
    const findOne = async (): Promise<User> => {
      return completeFakeUser({});
    };

    const find = async (): Promise<User[]> => {
      const fakeUsers = completeFakeUsers();

      return fakeUsers;
    };

    return { findOne, find };
  };

  return { DatabaseMethods };
});
describe("UserService list-user", () => {
  it("Should return a user with no password", async () => {
    // const result = await UserService.listUser()
    const result = await UserService.listUser(
      "dc7a7005-d217-47da-8240-c5e059b73cd5"
    );
    console.log("@@@111", result); // to make sure we are using the fake users

    expect(result).toStrictEqual(completeFakeUserResult({}));
  });

  it("Should return  users  with no password", async () => {
    const result = await UserService.listAllUsers();
    console.log("@@@111", result); // to make sure we are using the fake users

    expect(result).toStrictEqual(completeFakeUsersResult());
  });
});
