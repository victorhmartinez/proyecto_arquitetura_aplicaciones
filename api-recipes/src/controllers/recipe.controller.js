import Recipe from "../models/recipe";
import {
  dataResponse,
  notFoundResponseHandler,
  okResponse,
} from "../uitls/basicResponses";

export const createRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);

    dataResponse(res, recipe);
  } catch (error) {
    next(error);
  }
};

export const getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find();

    dataResponse(res, recipes);
  } catch (error) {
    next(error);
  }
};
export const updateRecipe = async (req, res, next) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!recipe) return notFoundResponseHandler(res, "Recipe does not exist");

    dataResponse(res, recipe);
  } catch (error) {
    next(error);
  }
};

export const getRecipe = async (req, res, next) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findById(id);

    if (!recipe) return notFoundResponseHandler(res, "Recipe does not exist");

    dataResponse(res, recipe);
  } catch (error) {
    next(error);
  }
};

export const deleteRecipe = async (req, res, next) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findOneAndDelete({ _id: id });

    if (!recipe) return notFoundResponseHandler(res, "Recipe does not exist");

    res.json(okResponse("Recipe successfully deleted"));
  } catch (error) {
    next(error);
  }
};
