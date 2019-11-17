import { Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';
import HttpStatus from 'http-status-codes';

const errorHandler = (error: HttpError, req: Request, res: Response, next: NextFunction) => {
  const httpStatusCode = error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
  const errorObject = res.locals.error || error.message;
  res.status(httpStatusCode).json(errorObject);
}

export default errorHandler;
