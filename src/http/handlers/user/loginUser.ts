import { Handler, Response, Request } from "express";
import { ErrorHandler, Severity } from "../../../utils";
import { UserService } from "../../../use-cases";

export const LoginUser: Handler = async (
  request: Request,
  response: Response
) => {
  try {
    const token = await UserService.loginUser(request.body);

    if (!token) {
      throw Error("Error login check logs");
    }
    return response.status(201).send({
      token
    });
  } catch (error) {
    ErrorHandler({
      error,
      additionalErrorInfo: {
        severity: Severity.WARN,
        identifier: "Login handler",
        code: request.code,
        body: request.body,
        headers: request.headers
      }
    });

    return response.status(401).send({
      message: "User cannot login, check logs to see why",
      errorCode: request.code
    });
  }
};
