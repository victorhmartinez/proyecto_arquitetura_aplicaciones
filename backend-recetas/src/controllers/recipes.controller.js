import * as recipeService from "../services/recipe.service";

export const createRecipe = async (req, res) => {
  const data = await recipeService.addNewRecipe(req.body);

  if (data.status != "ERROR") {
    res.json(data);
  } else {
    res.status(data.code).json(data);
  }
};

export const getAllRecipes = async (req, res) => {
  const data = await recipeService.getAllRecipes();

  if (data.status != "ERROR") {
    res.json(data);
  } else {
    res.status(data.code).json(data);
  }
};

export const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const data = await recipeService.editOneRecipe(id, req.body);

  if (data.status != "ERROR") {
    res.json(data);
  } else {
    res.status(data.code).json(data);
  }
};

export const getRecipe = async (req, res) => {
  const { id } = req.params;
  const data = await recipeService.getOneRecipe(id);

  if (data.status != "ERROR") {
    res.json(data);
  } else {
    res.status(data.code).json(data);
  }
};

export const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  const data = await recipeService.deleteOneRecipe(id);

  if (data.status != "ERROR") {
    res.json(data);
  } else {
    res.status(data.code).json(data);
  }
};
