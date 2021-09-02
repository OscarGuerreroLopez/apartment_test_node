import { UserService } from "./";
import { addFakeUser } from "../../test/generators/makeFakeUser";

describe("UserService add-user", () => {
  it("Should return true if user is added", async () => {
    const user = addFakeUser({});

    const result = await UserService.addUser(user);

    expect(result).toBeTruthy();
  });

  it("Should throw error if fname does not exists", async () => {
    try {
      const user = addFakeUser({ fname: null });

      await UserService.addUser(user);
    } catch (error) {
      let message = "";

      if (error instanceof Error) {
        message = error.message;
      }

      expect(error).toBeInstanceOf(Error);
      expect(message).toStrictEqual("invalid first name");
    }
  });

  it("should throw an error if user exists", async () => {
    try {
      const user = addFakeUser({});

      await UserService.addUser(user);
    } catch (error: unknown) {
      let message = "";

      if (error instanceof Error) {
        message = error.message;
      }

      expect(error).toBeInstanceOf(Error);
      expect(message).toStrictEqual(
        "User with email oscar@oscar.com already exists"
      );
    }
  });
});
