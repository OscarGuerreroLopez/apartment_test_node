import { BuildMakeUser } from "./user";
import { Id, GeoLocation, ValidateFields } from "../utils";

export const MakeUser = BuildMakeUser({
  Id,
  GeoLocation,
  ValidateFields
}).makeUser;
