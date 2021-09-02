import { ApartmentServiceMethods } from "./interfaces";
import { MakeAddApartment } from "./add-apartment";
import { MakeListApartment } from "./list-apartment";
import { MakeListApartments } from "./list-apartments";

import { DbMethods } from "../../infra/db";
import { GeoLocation } from "../../utils";

const { addApartment } = MakeAddApartment({ DbMethods });
const { listApartment } = MakeListApartment({
  DbMethods,
  GeoLocation
});

const { listAllApartments } = MakeListApartments({
  DbMethods,
  GeoLocation
});

export const ApartmentService: Readonly<ApartmentServiceMethods> = {
  addApartment,
  listApartment,
  listAllApartments
};

export * from "./interfaces";
