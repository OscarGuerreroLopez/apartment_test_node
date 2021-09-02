import { ID, MakeGeoLocation, InputType, FieldType } from "../utils";

export interface Apartment {
  id?: string;
  userId: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
  geoLocation: [number, number];
  numberOfRooms: number;
}

export interface ApartmentEntity {
  getId: () => string;
  getUserId: () => string;
  getAddress: () => string;
  getCity: () => string;
  getCountry: () => string;
  getZipCode: () => string;
  getGeoLocation: (params: [number, number]) => { lat: number; lon: number };
  getLocation: () => [number, number];
  getNumberOfRooms: () => number;
}

export interface BuildMakeApartmentParams {
  Id: ID;
  GeoLocation: MakeGeoLocation;
  ValidateFields: (
    typeOfField: FieldType,
    input: InputType,
    length?: number
  ) => boolean;
}

export type MakeApartment = (apartmentParams: Apartment) => ApartmentEntity;

export interface BuildMakeApartment {
  makeApartment: MakeApartment;
}
