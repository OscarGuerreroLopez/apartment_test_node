import { MakeUser } from "../../user";
import { AddUserUseCase, MakeAddUserParams } from "./interfaces";
import { User } from "../../entities/user";

export const MakeAddUser = ({
  DbMethods,
  makePassword
}: MakeAddUserParams): AddUserUseCase => {
  const addUser = async (userInfo: User): Promise<boolean> => {
    const user = MakeUser(userInfo);

    const userExists = await DbMethods.findOne<User>("user", {
      email: user.getEmail()
    });

    if (Object.keys(userExists).length > 0) {
      throw Error(`User with email ${userInfo.email} already exists`);
    }

    const hashPassword = await makePassword(user.getPassword());

    const addUserToDatabase = await DbMethods.insert("user", {
      id: user.getId(),
      fname: user.getFname(),
      lname: user.getLname(),
      address: user.getAddress(),
      city: user.getCity(),
      country: user.getCountry(),
      geoLocation: user.getLocation(),
      password: hashPassword,
      status: user.getStatus(),
      email: user.getEmail(),
      role: user.getRole()
    });

    return addUserToDatabase;
  };

  return { addUser };
};
