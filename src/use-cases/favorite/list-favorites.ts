import { Favorite } from "../../entities/favorite";

import {
  MakeListFavoriteParams,
  ListFavoriteUseCase,
  ListAllFavorites
} from "./interfaces";

export const MakeListFavorites = ({
  DbMethods
}: MakeListFavoriteParams): ListFavoriteUseCase => {
  const listAllFavorites: ListAllFavorites = async (
    userId: string,
    where?: IObjectLiteral
  ) => {
    where = { ...where, userId };

    const result = await DbMethods.find<Favorite>("favorite", where);

    return result;
  };
  return { listAllFavorites };
};
