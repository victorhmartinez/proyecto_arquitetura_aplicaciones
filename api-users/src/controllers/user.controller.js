import User from "../models/user";
import {
  dataResponse,
  notFoundResponseHandler,
  okResponse,
} from "../uitls/basicResponses";

export const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    dataResponse(res, user);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    dataResponse(res, users);
  } catch (error) {
    next(error);
  }
};

export const getAllActiveUsers = async (req, res, next) => {
  try {
    const users = await User.find({ active: true });

    dataResponse(res, users);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!user) return notFoundResponseHandler(res, "User does not exist");

    dataResponse(res, user);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) return notFoundResponseHandler(res, "User does not exist");

    dataResponse(res, user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findOneAndDelete({ _id: id });

    if (!user) return notFoundResponseHandler(res, "User does not exist");

    res.json(okResponse("User successfully deleted"));
  } catch (error) {
    next(error);
  }
};
