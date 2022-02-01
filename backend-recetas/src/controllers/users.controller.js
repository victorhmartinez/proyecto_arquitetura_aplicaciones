import * as userService from "../services/user.service";

export const getAllUsers = async (req, res) => {
  const data = await userService.getAllUsers();

  if (data.status != "ERROR") {
    res.json(data);
  } else {
    res.status(data.code).json(data);
  }
};

export const getAllActiveUsers = async (req, res) => {
  const data = await userService.getAllUsers({ active: true });

  if (data.status != "ERROR") {
    res.json(data);
  } else {
    res.status(data.code).json(data);
  }
};
