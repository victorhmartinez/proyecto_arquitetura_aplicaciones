import { Router } from "express";

import * as userCtrl from "../controllers/users.controller";

const router = Router();

router.get("/", userCtrl.getAllUsers);

router.get("/active", userCtrl.getAllActiveUsers);

export default router;
