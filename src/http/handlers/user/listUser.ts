import { Handler, Response, Request } from "express";
import { ErrorHandler, Severity } from "../../../utils";
import { UserService } from "../../../use-cases";

export const ListUser: Handler = async (
  request: Request,
  response: Response
) => {
  try {
    if (!request.where?.id) {
      throw Error("user id not supplied");
    }

    const userId = request.where.id as string;

    const isSameUser = userId === request.user.id;
    const isAdminUser = request.user.role === "admin";

    if (isSameUser || isAdminUser) {
      const result = await UserService.listUser(userId);

      return response.status(200).send(result);
    }

    throw Error(
      `user ${request.user.id} tried to get info from ${request.where.id}`
    );
  } catch (error) {
    ErrorHandler({
      error,
      additionalErrorInfo: {
        severity: Severity.WARN,
        identifier: "ListUser handler",
        code: request.code,
        body: request.body,
        headers: request.headers
      }
    });

    return response.status(403).send({
      message: "User cannot execute this",
      errorCode: request.code
    });
  }
};

export const ListUsers: Handler = async (
  request: Request,
  response: Response
) => {
  try {
    const result = await UserService.listAllUsers();

    return response.status(200).send(result);
  } catch (error) {
    ErrorHandler({
      error,
      additionalErrorInfo: {
        severity: Severity.WARN,
        identifier: "ListUsers handler",
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
