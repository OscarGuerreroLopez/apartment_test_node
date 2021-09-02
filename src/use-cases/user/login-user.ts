import {
  LoginUserUseCase,
  MakeLoginUserParams,
  LoginUserParams
} from "./interfaces";
import { User } from "../../entities/user";

export const MakeLoginUser = ({
  DbMethods,
  comparePassword,
  makeToken
}: MakeLoginUserParams): LoginUserUseCase => {
  const loginUser = async ({ email, password }: LoginUserParams) => {
    if (!email || !password) {
      throw Error("User params not supplied");
    }
    const user = await DbMethods.findOne<User>("user", { email });
    if (Object.keys(user).length === 0) {
      throw Error(`User with email ${email} does not exists`);
    }

    const result = await comparePassword(password, user.password);

    if (!result) {
      throw Error(`User with email ${email} wrong password`);
    }

    const token = makeToken({
      id: user.id || "",
      role: user.role
    });
    return token;
  };

  return { loginUser };
};
