import { Handler, Response, Request } from "express";
import { ErrorHandler, Severity } from "../../../utils";
import { ApartmentService } from "../../../use-cases";

export const ListApartment: Handler = async (
  request: Request,
  response: Response
) => {
  try {
    if (!request.where?.id) {
      throw Error("apartment id not supplied");
    }

    const apartmentId = request.where.id as string;

    const result = await ApartmentService.listApartment(
      apartmentId,
      request.user?.geoLocation || [0, 0]
    );

    return response.status(200).send(result);
  } catch (error) {
    ErrorHandler({
      error,
      additionalErrorInfo: {
        severity: Severity.WARN,
        identifier: "ListApartment handler",
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
