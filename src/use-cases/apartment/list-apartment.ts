import { Apartment } from "../../entities/apartment";
import {
  MakeListApartmentParams,
  ListApartmentUseCase,
  ListApartment,
  LatitudeLongitude,
  Distance
} from "./interfaces";

export const MakeListApartment = ({
  DbMethods,
  GeoLocation
}: MakeListApartmentParams): ListApartmentUseCase => {
  const listApartment: ListApartment = async (
    apartmentId: string,
    requesterLocation: [number, number]
  ) => {
    const result = await DbMethods.findOne<Apartment>("apartment", {
      id: apartmentId
    });

    const requesterGeoLocation: LatitudeLongitude =
      GeoLocation.makeGeoLocation(requesterLocation);
    const apartmentGeoLocation: LatitudeLongitude = GeoLocation.makeGeoLocation(
      result.geoLocation
    );

    const distance: Distance = GeoLocation.distanceGeoLocation(
      requesterGeoLocation,
      apartmentGeoLocation
    );

    return { ...result, distance };
  };

  return { listApartment };
};
