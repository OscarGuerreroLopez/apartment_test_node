import { Handler, Response, Request } from "express";
import { ErrorHandler, Severity } from "../../../utils";
import { ApartmentService } from "../../../use-cases";

export const ListApartments: Handler = async (
  request: Request,
  response: Response
) => {
  try {
    const result = await ApartmentService.listAllApartments(
      request.user?.geoLocation || [0, 0],
      request.where
    );

    return response.status(200).send(result);
  } catch (error) {
    ErrorHandler({
      error,
      additionalErrorInfo: {
        severity: Severity.WARN,
        identifier: "ListApartments handler",
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
