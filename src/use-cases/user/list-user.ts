import { User } from "../../entities/user";
import { MakeListUserParams, ListUserUseCase } from "./interfaces";

export const MakeListUser = ({
  DbMethods,
  removePassword
}: MakeListUserParams): ListUserUseCase => {
  const listUser = async (userId: string) => {
    const result = removePassword(
      await DbMethods.findOne<User>("user", { id: userId })
    );

    return result as IObjectLiteral;
  };

  const listAllUsers = async () => {
    // to do pagination, not implemented for this test
    const result = removePassword(await DbMethods.find<User>("user", {}));

    return result as IObjectLiteral[];
  };

  return { listAllUsers, listUser };
};
