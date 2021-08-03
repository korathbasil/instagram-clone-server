import { Router } from "express";

import { postController } from "../controllers";

import { isAuthenticated } from "../middlewares";

const router = Router();

router.get("/", isAuthenticated, postController.getPosts);

router.post("/create", postController.createPost);

export default router;
