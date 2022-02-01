import { Router } from "express";
import { okResponse } from "../uitls/basicResponses";
import userRoutes from "./user.routes";

const router = Router();

router.get("/", (req, res) => {
  res.redirect("/api");
});

router.get("/api", (req, res) => {
  const response = okResponse("Welcome to API-Users");

  res.json(response);
});

// Use other routes here
router.use("/api/users", userRoutes);

export default router;
