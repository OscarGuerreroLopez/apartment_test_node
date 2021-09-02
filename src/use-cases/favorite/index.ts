import { FavoriteServiceMethods } from "./interfaces";
import { MakeAddFavorite } from "./add-favorite";
import { MakeListFavorites } from "./list-favorites";
import { DbMethods } from "../../infra/db";

const { addFavorite } = MakeAddFavorite({ DbMethods });
const { listAllFavorites } = MakeListFavorites({ DbMethods });
export const FavoriteService: Readonly<FavoriteServiceMethods> = {
  addFavorite,
  listAllFavorites
};

export * from "./interfaces";
