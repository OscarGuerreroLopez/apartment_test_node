import { BuildMakeApartment } from "./apartment";
import { Id, GeoLocation, ValidateFields } from "../utils";

export const MakeApartment = BuildMakeApartment({
  Id,
  GeoLocation,
  ValidateFields
}).makeApartment;
