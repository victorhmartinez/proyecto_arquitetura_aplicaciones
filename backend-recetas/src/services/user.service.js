import axios from "axios";
import config from "../config/config";

const USERS_API = config.API_USERS_URL + "/users";

export const getAllUsers = async (params = { active: false }) => {
  let url = USERS_API;

  if (params.active) {
    url += "/active";
  }

  try {
    const result = await axios.get(url);
    return result.data;
  } catch (err) {
    return err.result.data;
  }
};
