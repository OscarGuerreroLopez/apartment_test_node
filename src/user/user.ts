import {
  BuildMakeUserParams,
  BuildMakeUser as BuildMakeUserObject,
  User,
  UserEntity
} from "../entities/user";

export const BuildMakeUser = (
  buildMakeUser: BuildMakeUserParams
): BuildMakeUserObject => {
  const makeUser = (userParams: User): UserEntity => {
    const { Id, ValidateFields, GeoLocation } = buildMakeUser;
    if (!userParams.id) {
      userParams.id = Id.makeId();
    } else {
      if (!Id.isValidId(userParams.id)) {
        throw Error("Invalid user ID");
      }
    }

    if (!userParams.fname || !ValidateFields("string", userParams.fname)) {
      throw Error("invalid first name");
    }

    if (!userParams.lname || !ValidateFields("string", userParams.lname, 200)) {
      throw Error("invalid last name");
    }

    if (!userParams.email || !ValidateFields("email", userParams.email, 200)) {
      throw Error("invalid email");
    }

    // todo continue with validations

    const getGeoLocation = () => {
      const result = GeoLocation.makeGeoLocation(userParams.geoLocation);
      return result;
    };

    return Object.freeze({
      getId: () => userParams.id || "",
      getFname: () => userParams.fname,
      getLname: () => userParams.lname,
      getAddress: () => userParams.address,
      getCity: () => userParams.city,
      getCountry: () => userParams.country,
      getGeoLocation,
      getLocation: () => userParams.geoLocation,
      getPassword: () => userParams.password,
      getStatus: () => userParams.status,
      getEmail: () => userParams.email,
      getRole: () => userParams.role
    });
  };

  return { makeUser };
};
