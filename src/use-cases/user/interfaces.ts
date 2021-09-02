import { User } from "../../entities/user";
import { DatabaseMethodsRepo } from "../../infra/db/databaseMethods";
import { MakePassword, ComparePassword, MakeToken } from "../../utils";

// add-user types
export type AddUser = (userInfo: User) => Promise<boolean>;

export interface AddUserUseCase {
  addUser: AddUser;
}

export interface MakeAddUserParams {
  DbMethods: DatabaseMethodsRepo;
  makePassword: MakePassword;
}

// list-user types
export type ListAllUsers = () => Promise<Partial<User>[]>;
export type ListUser = (userId: string) => Promise<Partial<User>>;
export type RemovePassword = <T>(
  items: T | T[]
) => IObjectLiteral[] | IObjectLiteral;

export interface ListUserUseCase {
  listAllUsers: ListAllUsers;
  listUser: ListUser;
}

export interface MakeListUserParams {
  DbMethods: DatabaseMethodsRepo;
  removePassword: RemovePassword;
}

// login-user typescript

export type LoginUser = (params: LoginUserParams) => Promise<string>;
export interface LoginUserUseCase {
  loginUser: LoginUser;
}

export interface MakeLoginUserParams {
  DbMethods: DatabaseMethodsRepo;
  comparePassword: ComparePassword;
  makeToken: MakeToken;
}

export interface LoginUserParams {
  email: string;
  password: string;
}

// index params
export interface UserServiceMethods {
  addUser: AddUser;
  listUser: ListUser;
  listAllUsers: ListAllUsers;
  loginUser: LoginUser;
}

export * from "./interfaces";
