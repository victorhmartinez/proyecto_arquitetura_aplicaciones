const basicResponse = (status, message, code) => {
  return { status, message, code };
};

export const okResponse = (message) => {
  return basicResponse("OK", message, 200);
};

export const errorResponse = (message) => {
  return basicResponse("ERROR", message, 500);
};

export const notFoundResponse = (message) => {
  return basicResponse("ERROR", message, 404);
};

export const notFoundResponseHandler = (res, message = "") => {
  const statusCode = 404;

  res.status(statusCode).json(notFoundResponse(message));
};

export const dataResponse = (res, data, code = 200) => {
  res.status(code).json({ status: "OK", data, code });
};
