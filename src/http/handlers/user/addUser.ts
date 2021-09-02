import { Handler, Response, Request } from "express";
import { ErrorHandler, Severity } from "../../../utils";
import { UserService } from "../../../use-cases";

export const AddUser: Handler = async (
  request: Request,
  response: Response
) => {
  try {
    const result = await UserService.addUser(request.body);

    return response.status(201).send({
      message: result
    });
  } catch (error) {
    ErrorHandler({
      error,
      additionalErrorInfo: {
        severity: Severity.WARN,
        identifier: "AddUser handler",
        code: request.code,
        body: request.body,
        headers: request.headers
      }
    });

    return response.status(500).send({
      message: "User cannot register, check logs",
      errorCode: request.code
    });
  }
};
