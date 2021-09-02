import { Handler, Response, Request } from "express";
import { ErrorHandler, Severity } from "../../../utils";
import {
  ApartmentService,
  FavoriteService,
  ApartmentWithDistance
} from "../../../use-cases";

export const ListFavorites: Handler = async (
  request: Request,
  response: Response
) => {
  try {
    let favorites: ApartmentWithDistance[] = [];
    const rawFavorites = await FavoriteService.listAllFavorites(
      request.user.id
    );
    const userGeoLocation = request.user.geoLocation || [0, 0];

    for (const favorite of rawFavorites) {
      const apartment = await ApartmentService.listApartment(
        favorite.apartmentId,
        userGeoLocation
      );

      favorites = [...favorites, apartment];
    }

    return response.status(200).send(favorites);
  } catch (error) {
    ErrorHandler({
      error,
      additionalErrorInfo: {
        severity: Severity.WARN,
        identifier: "ListFavorites handler",
        code: request.code,
        body: request.body,
        headers: request.headers
      }
    });

    return response.status(500).send({
      message: "User cannot execute this",
      errorCode: request.code
    });
  }
};
