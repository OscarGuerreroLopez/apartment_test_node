import { Favorite } from "../../entities/favorite";
import { DatabaseMethodsRepo } from "../../infra/db/databaseMethods";

// add-favorite types
export type AddFavorite = (
  favoriteInfo: Partial<Favorite[]>,
  userId: string
) => Promise<boolean>;

export interface AddFavoriteUseCase {
  addFavorite: AddFavorite;
}

export interface MakeAddFavoriteParams {
  DbMethods: DatabaseMethodsRepo;
}

// list-favorites types
export interface MakeListFavoriteParams {
  DbMethods: DatabaseMethodsRepo;
}

export type ListAllFavorites = (
  userId: string,
  where?: IObjectLiteral
) => Promise<Favorite[]>;

export interface ListFavoriteUseCase {
  listAllFavorites: ListAllFavorites;
}
// index params
export interface FavoriteServiceMethods {
  addFavorite: AddFavorite;
  listAllFavorites: ListAllFavorites;
}
