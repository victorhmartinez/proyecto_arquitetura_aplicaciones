import dotenv from "dotenv";

dotenv.config();

const config = {
  API_RECIPES_URL: process.env.API_RECIPES_URL || "",
  API_USERS_URL: process.env.API_USERS_URL || "",
  PORT: process.env.PORT || 4000,
};

export default config;
