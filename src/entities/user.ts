import { ID, MakeGeoLocation, InputType, FieldType } from "../utils";
export interface User {
  id?: string;
  fname: string;
  lname: string;
  address: string;
  city: string;
  country: string;
  geoLocation: [number, number];
  password: string;
  status: string;
  email: string;
  role: string;
}

export interface UserEntity {
  getId: () => string;
  getFname: () => string;
  getLname: () => string;
  getAddress: () => string;
  getCity: () => string;
  getCountry: () => string;
  getGeoLocation: (params: [number, number]) => { lat: number; lon: number };
  getLocation: () => [number, number];
  getPassword: () => string;
  getStatus: () => string;
  getEmail: () => string;
  getRole: () => string;
}

export interface BuildMakeUserParams {
  Id: ID;
  GeoLocation: MakeGeoLocation;
  ValidateFields: (
    typeOfField: FieldType,
    input: InputType,
    length?: number
  ) => boolean;
}

export type MakeUser = (userParams: User) => UserEntity;
export interface BuildMakeUser {
  makeUser: MakeUser;
}
