import { errorResponse } from "../uitls/basicResponses";

const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json(errorResponse("An internal error occurred"));
};

export default errorHandler;
