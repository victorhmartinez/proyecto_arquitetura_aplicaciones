import { Router } from "express";
import { okResponse } from "../uitls/basicResponses";
import userRoutes from "./user.routes";
import recipeRoutes from "./recipes.routes";

const router = Router();

router.get("/", (req, res) => {
  res.redirect("/api");
});

router.get("/api", (req, res) => {
  const response = okResponse("Welcome to the Recipes App - Backend");

  res.json(response);
});

// Use other routes here
router.use("/api/users", userRoutes);
router.use("/api/recipes", recipeRoutes);

export default router;
