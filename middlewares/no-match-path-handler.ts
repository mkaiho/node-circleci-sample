import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import HttpStatus from 'http-status-codes';

const noMatchPathHandler = (req: Request, res: Response, next: NextFunction) => {
  const notFoundError = createError(HttpStatus.NOT_FOUND);
  next(notFoundError);
}

export default noMatchPathHandler;
