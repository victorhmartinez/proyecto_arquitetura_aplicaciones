import axios from "axios";
import config from "../config/config";

const RECIPES_API = config.API_RECIPES_URL + "/recipes";

export const getAllRecipes = async () => {
  try {
    const result = await axios.get(RECIPES_API);
    return result.data;
  } catch (err) {
    return err.response.data;
  }
};

export const addNewRecipe = async (body) => {
  try {
    const result = await axios.post(RECIPES_API, body);
    return result.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getOneRecipe = async (recipeId) => {
  try {
    const result = await axios.get(`${RECIPES_API}/${recipeId}`);
    return result.data;
  } catch (err) {
    return err.response.data;
  }
};

export const editOneRecipe = async (recipeId, body) => {
  try {
    const result = await axios.put(`${RECIPES_API}/${recipeId}`, body);
    return result.data;
  } catch (err) {
    return err.response.data;
  }
};

export const deleteOneRecipe = async (recipeId) => {
  try {
    const result = await axios.delete(`${RECIPES_API}/${recipeId}`);
    return result.data;
  } catch (err) {
    return err.response.data;
  }
};
