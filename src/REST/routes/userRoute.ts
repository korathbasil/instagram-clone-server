import { Router } from "express";

import { userController } from "../controllers";

const router = Router();

router.post("/signup", userController.userSignup);

router.post("/login", userController.userLogin);

export default router;
