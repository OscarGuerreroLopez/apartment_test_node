import {
  BuildMakeApartmentParams,
  BuildMakeApartment as BuildMakeApartmentObject,
  Apartment,
  ApartmentEntity
} from "../entities/apartment";

export const BuildMakeApartment = (
  buildMakeApartment: BuildMakeApartmentParams
): BuildMakeApartmentObject => {
  const makeApartment = (
    apartmentParams: Apartment
  ): Readonly<ApartmentEntity> => {
    const { Id, ValidateFields, GeoLocation } = buildMakeApartment;

    if (!apartmentParams.id) {
      apartmentParams.id = Id.makeId();
    } else {
      if (!Id.isValidId(apartmentParams.id)) {
        throw Error("Invalid apartment ID");
      }
    }

    if (!Id.isValidId(apartmentParams.userId)) {
      throw Error("Invalid apartment ID");
    }

    if (
      !apartmentParams.address ||
      !ValidateFields("alphanumeric", apartmentParams.address, 200)
    ) {
      throw Error("invalid address");
    }

    if (
      !apartmentParams.city ||
      !ValidateFields("alphanumeric", apartmentParams.city)
    ) {
      throw Error("invalid city");
    }

    if (
      !apartmentParams.country ||
      !ValidateFields("string", apartmentParams.country)
    ) {
      throw Error("invalid country");
    }

    if (
      !apartmentParams.zipCode ||
      !ValidateFields("alphanumeric", apartmentParams.zipCode)
    ) {
      throw Error("invalid zip code");
    }

    if (
      !apartmentParams.numberOfRooms ||
      !ValidateFields("number", apartmentParams.numberOfRooms)
    ) {
      throw Error("invalid number of rooms");
    }

    const getGeoLocation = () => {
      const result = GeoLocation.makeGeoLocation(apartmentParams.geoLocation);
      return result;
    };

    return Object.freeze({
      getId: () => apartmentParams.id || "",
      getUserId: () => apartmentParams.userId,
      getAddress: () => apartmentParams.address,
      getCity: () => apartmentParams.city,
      getCountry: () => apartmentParams.country,
      getZipCode: () => apartmentParams.zipCode,
      getGeoLocation,
      getLocation: () => apartmentParams.geoLocation,
      getNumberOfRooms: () => apartmentParams.numberOfRooms
    });
  };

  return { makeApartment };
};
