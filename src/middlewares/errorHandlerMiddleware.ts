import { ErrorRequestHandler } from "express";

const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  //Add your custom error handling logic here
  if (err instanceof Error) {
    res.status(500).json({ error: err.message });
  }
};
export default errorHandlerMiddleware;
