import { Router } from "express";
import { okResponse } from "../uitls/basicResponses";
import recipeRoutes from "./recipes.routes";

const router = Router();

router.get("/", (req, res) => {
  res.redirect("/api");
});

router.get("/api", (req, res) => {
  const response = okResponse("Welcome to API-Recipes");

  res.json(response);
});

// Use other routes here
router.use("/api/recipes", recipeRoutes);

export default router;
