import { UserServiceMethods } from "./interfaces";
import { MakeAddUser } from "./add-user";
import { MakeListUser } from "./list-user";
import { MakeLoginUser } from "./login-user";
import { DbMethods } from "../../infra/db";
import { BuildPassword, BuildMakeVerifyJwt } from "../../utils";

const buildPassword = BuildPassword(10);
const buildJwt = BuildMakeVerifyJwt.getInstance();

const makePassword = buildPassword.makePassword;
const comparePassword = buildPassword.comparePassword;
const makeToken = buildJwt.makeToken;
const removePassword = buildPassword.removePassword;

const { addUser } = MakeAddUser({
  DbMethods,
  makePassword
});
const { listUser, listAllUsers } = MakeListUser({
  DbMethods,
  removePassword
});
const { loginUser } = MakeLoginUser({
  DbMethods,
  comparePassword,
  makeToken
});

export const UserService: Readonly<UserServiceMethods> = {
  addUser,
  listUser,
  listAllUsers,
  loginUser
};
