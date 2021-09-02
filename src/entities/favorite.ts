import { ID } from "../utils";

export interface Favorite {
  id?: string;
  apartmentId: string;
  userId: string;
}

export interface FavoriteEntity {
  getId: () => string;
  getApartmentId: () => string;
  getUserId: () => string;
}

export interface BuildMakeFavoriteParams {
  Id: ID;
}

export type MakeFavorite = (favoriteParams: Favorite) => FavoriteEntity;

export interface BuildMakeFavorite {
  makeFavorite: MakeFavorite;
}
