/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import config from "../../config";

export const globalErrorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 200;
  const success = false;
  let message = "Something Went Wrong"; // → Error Type → Validation Error, Cast Error, Duplicate Entry
  let errorMessages = "Something Went Wrong";

  res.status(statusCode).json({
    statusCode,
    success,
    message,
    errorMessages,
    stack: config.env !== "production" ? error?.stack : undefined,
  });
};
