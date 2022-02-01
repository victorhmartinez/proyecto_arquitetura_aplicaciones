import { Router } from "express";

import * as recipesCtrl from "../controllers/recipe.controller";

const router = Router();

router.route("/").post(recipesCtrl.createRecipe).get(recipesCtrl.getAllRecipes);

router
  .route("/:id")
  .get(recipesCtrl.getRecipe)
  .put(recipesCtrl.updateRecipe)
  .delete(recipesCtrl.deleteRecipe);

export default router;
