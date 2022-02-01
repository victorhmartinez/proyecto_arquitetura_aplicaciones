const basicResponse = (status, message, code) => {
  return { status, message, code };
};

export const okResponse = (message) => {
  return basicResponse("OK", message, 200);
};
