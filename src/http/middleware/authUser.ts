import { Request, Response, NextFunction } from "express";
import { BuildMakeVerifyJwt, ErrorHandler, Severity } from "../../utils";
import { UserService } from "../../use-cases";

export const UserAuthMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const code = request.code;

  try {
    const token = request.headers.authorization;

    if (!token) {
      throw Error("missing token");
    }

    const jwtInstance = BuildMakeVerifyJwt.getInstance();

    const decoded = jwtInstance.verifyToken(token);

    const user = await UserService.listUser(decoded.id);

    if (decoded.role !== user.role) {
      throw Error(
        `user in the token has role ${decoded.role} and in the DB ${user.role} `
      );
    }

    if (user.status !== "active") {
      throw Error(`User ${user.id} not active`);
    }
    request.user = user;

    next();
  } catch (error) {
    ErrorHandler({
      error,
      additionalErrorInfo: {
        severity: Severity.WARN,
        identifier: "Auth Middleware",
        code: request.code,
        body: request.body,
        headers: request.headers
      }
    });
    response.status(401).send({ message: "Not Authorized", code });
  }
};
