import { Router } from "express";

import { userController } from "../controllers";
import { isAuthenticated } from "../middlewares";

const router = Router();

router.post("/signup", userController.userSignup);

router.post("/login", userController.userLogin);

router.post("/follow-req", isAuthenticated, userController.sendFollowRequest);

export default router;
