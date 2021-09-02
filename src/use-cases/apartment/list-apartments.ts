import { Apartment } from "../../entities/apartment";
import {
  MakeListApartmentParams,
  ListApartmentsUseCase,
  ListAllApartments,
  ApartmentWithDistance,
  LatitudeLongitude,
  Distance
} from "./interfaces";

export const MakeListApartments = ({
  DbMethods,
  GeoLocation
}: MakeListApartmentParams): ListApartmentsUseCase => {
  const listAllApartments: ListAllApartments = async (
    requesterLocation: [number, number],
    where?: IObjectLiteral
  ) => {
    const apartmentsWithDistance: ApartmentWithDistance[] = [];
    const requesterGeoLocation: LatitudeLongitude =
      GeoLocation.makeGeoLocation(requesterLocation);
    let searchDistance: number | undefined = undefined;

    if (where?.distance) {
      searchDistance = where.distance;
      delete where.distance;
    }

    const result = await DbMethods.find<Apartment>("apartment", where || {});

    result.forEach((apartment) => {
      const apartmentGeoLocation: LatitudeLongitude =
        GeoLocation.makeGeoLocation(apartment.geoLocation);
      const distance: Distance = GeoLocation.distanceGeoLocation(
        requesterGeoLocation,
        apartmentGeoLocation
      );

      if (searchDistance && distance.distance / 1000 <= searchDistance) {
        apartmentsWithDistance.push({ ...apartment, distance });
      }
      if (!searchDistance) {
        apartmentsWithDistance.push({ ...apartment, distance });
      }
    });

    return apartmentsWithDistance;
  };

  return { listAllApartments };
};
