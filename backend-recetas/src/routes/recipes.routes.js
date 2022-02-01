import { Router } from "express";

import * as recipeCtrl from "../controllers/recipes.controller";

const router = Router();

router.route("/").post(recipeCtrl.createRecipe).get(recipeCtrl.getAllRecipes);

router
  .route("/:id")
  .get(recipeCtrl.getRecipe)
  .put(recipeCtrl.updateRecipe)
  .delete(recipeCtrl.deleteRecipe);

export default router;
