import { MakeGeoLocation } from "../../utils";
import { Apartment } from "../../entities/apartment";
import { DatabaseMethodsRepo } from "../../infra/db/databaseMethods";

export interface LatitudeLongitude {
  lat: number;
  lon: number;
}

export interface Distance {
  heading: number;
  distance: number;
}

// add-apartment types
export type AddApartment = (apartmentInfo: Apartment) => Promise<boolean>;

export interface AddApartmentUseCase {
  addApartment: AddApartment;
}

export interface MakeAddApartmentParams {
  DbMethods: DatabaseMethodsRepo;
}

// list-apartment types
export type searchLoacation = "city" | "country";
export type searchRooms = number;
export type SearchApartments = (
  location: searchLoacation,
  rooms: searchRooms
) => Promise<Apartment[]>;

export interface ApartmentWithDistance extends Apartment {
  distance: { heading: number; distance: number };
}

export type ListAllApartments = (
  requesterLocation: [number, number],
  where?: IObjectLiteral
) => Promise<ApartmentWithDistance[]>;

export type ListApartment = (
  apartmentId: string,
  requesterLocation: [number, number]
) => Promise<ApartmentWithDistance>;

export interface ListApartmentUseCase {
  listApartment: ListApartment;
}

export interface ListApartmentsUseCase {
  listAllApartments: ListAllApartments;
}

export interface MakeListApartmentParams {
  DbMethods: DatabaseMethodsRepo;
  GeoLocation: MakeGeoLocation;
}

// index params
export interface ApartmentServiceMethods {
  addApartment: AddApartment;
  listApartment: ListApartment;
  listAllApartments: ListAllApartments;
}
