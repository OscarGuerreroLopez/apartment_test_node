import { Handler, Response, Request } from "express";
import { ErrorHandler, Severity } from "../../../utils";
import { ApartmentService } from "../../../use-cases";

export const AddApartment: Handler = async (
  request: Request,
  response: Response
) => {
  try {
    const result = await ApartmentService.addApartment({
      ...request.body,
      userId: request.user.id
    });

    return response.status(201).send({
      message: result
    });
  } catch (error) {
    ErrorHandler({
      error,
      additionalErrorInfo: {
        severity: Severity.WARN,
        identifier: "AddApartment handler",
        code: request.code,
        body: request.body,
        headers: request.headers
      }
    });

    return response.status(500).send({
      message: "Apartment cannot be registered, check logs",
      errorCode: request.code
    });
  }
};
