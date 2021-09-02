import { Request, Response, NextFunction } from "express";
import { BuildMakeVerifyJwt, ErrorHandler, Severity } from "../../utils";
import { UserService } from "../../use-cases";

export const AdminAuthMiddleware = async (
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

    const decodeToken = BuildMakeVerifyJwt.getInstance();

    const decoded = decodeToken.verifyToken(token);

    if (decoded.role !== "admin") {
      throw Error(`User ${decoded.id} tried to execute an admin route`);
    }

    const user = await UserService.listUser(decoded.id);
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
