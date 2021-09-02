import {
  BuildMakeFavoriteParams,
  BuildMakeFavorite as BuildMakeFavoriteObject,
  Favorite,
  FavoriteEntity
} from "../entities/favorite";

export const BuildMakeFavorite = (
  buildMakeFavorite: BuildMakeFavoriteParams
): BuildMakeFavoriteObject => {
  const makeFavorite = (favoriteParams: Favorite): Readonly<FavoriteEntity> => {
    const { Id } = buildMakeFavorite;

    if (!favoriteParams.id) {
      favoriteParams.id = Id.makeId();
    } else {
      if (!Id.isValidId(favoriteParams.id)) {
        throw Error("Invalid favorite ID");
      }
    }

    if (!Id.isValidId(favoriteParams.userId)) {
      throw Error("Invalid user ID");
    }

    if (!Id.isValidId(favoriteParams.apartmentId)) {
      throw Error("Invalid apartment ID");
    }

    return Object.freeze({
      getId: () => favoriteParams.id || "",
      getApartmentId: () => favoriteParams.apartmentId,
      getUserId: () => favoriteParams.userId
    });
  };

  return { makeFavorite };
};
