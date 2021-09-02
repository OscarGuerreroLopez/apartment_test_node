import { MakeApartment } from "../../apartment";
import { AddApartmentUseCase, MakeAddApartmentParams } from "./interfaces";
import { Apartment } from "../../entities/apartment";

export const MakeAddApartment = ({
  DbMethods
}: MakeAddApartmentParams): AddApartmentUseCase => {
  const addApartment = async (apartmentInfo: Apartment): Promise<boolean> => {
    const apartment = MakeApartment(apartmentInfo);

    // to do make sure user is user

    const apartmentExists = await DbMethods.findOne<Apartment>("apartment", {
      address: apartmentInfo.address,
      city: apartmentInfo.city,
      country: apartmentInfo.country
    });

    if (Object.keys(apartmentExists).length > 0) {
      throw Error(
        `Apartment with address ${apartmentInfo.address}, city ${apartmentInfo.city} and country ${apartmentInfo.country} already exists`
      );
    }

    const addApartmentToDatabase = await DbMethods.insert("apartment", {
      id: apartment.getId(),
      userId: apartment.getUserId(),
      address: apartment.getAddress(),
      city: apartment.getCity(),
      country: apartment.getCountry(),
      zipCode: apartment.getZipCode(),
      geoLocation: apartment.getLocation(),
      numberOfRooms: apartment.getNumberOfRooms()
    });

    return addApartmentToDatabase;
  };

  return { addApartment };
};
