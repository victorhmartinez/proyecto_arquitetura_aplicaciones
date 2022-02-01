import { Router } from "express";

import * as userCtrl from "../controllers/user.controller";

const router = Router();

router.route("/").post(userCtrl.createUser).get(userCtrl.getAllUsers);

router.get("/active", userCtrl.getAllActiveUsers);

router
  .route("/:id")
  .get(userCtrl.getUser)
  .put(userCtrl.updateUser)
  .delete(userCtrl.deleteUser);

export default router;
