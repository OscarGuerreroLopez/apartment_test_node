import { MakeFavorite } from "../../favorite";
import { Favorite } from "../../entities/favorite";
import { AddFavoriteUseCase, MakeAddFavoriteParams } from "./interfaces";

export const MakeAddFavorite = ({
  DbMethods
}: MakeAddFavoriteParams): AddFavoriteUseCase => {
  const addFavorite = async (
    favoriteInfo: Partial<Favorite[]>,
    userId: string
  ): Promise<boolean> => {
    for (const favoriteItem of favoriteInfo) {
      if (favoriteItem?.apartmentId) {
        const favorite = MakeFavorite({
          apartmentId: favoriteItem?.apartmentId,
          userId
        });

        const favoriteExists = await DbMethods.findOne<Favorite>("favorite", {
          apartmentId: favoriteItem.apartmentId,
          userId: favoriteItem.userId
        });

        if (Object.keys(favoriteExists).length === 0) {
          await DbMethods.insert("favorite", {
            id: favorite.getId(),
            apartmentId: favorite.getApartmentId(),
            userId: favorite.getUserId()
          });
        }
      }
    }

    return true;
  };

  return { addFavorite };
};
