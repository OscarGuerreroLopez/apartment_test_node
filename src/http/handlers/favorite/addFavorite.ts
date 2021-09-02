import { Handler, Response, Request } from "express";
import { ErrorHandler, Severity } from "../../../utils";
import { FavoriteService } from "../../../use-cases";

export const AddFavorite: Handler = async (
  request: Request,
  response: Response
) => {
  try {
    const result = await FavoriteService.addFavorite(
      request.body,
      request.user.id
    );

    return response.status(201).send({
      message: result
    });
  } catch (error) {
    ErrorHandler({
      error,
      additionalErrorInfo: {
        severity: Severity.WARN,
        identifier: "AddFavorite handler",
        code: request.code,
        body: request.body,
        headers: request.headers
      }
    });

    return response.status(500).send({
      message: "Favorite cannot be registered, check logs",
      errorCode: request.code
    });
  }
};
