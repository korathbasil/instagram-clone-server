import { Router } from "express";

import { postController } from "../controllers";

import { isAuthenticated } from "../middlewares";

const router = Router();

router.get("/", isAuthenticated, postController.getPosts);

router.post("/create", isAuthenticated, postController.createPost);

router.post("/like/:post_id", isAuthenticated, postController.likePost);

router.post("/commnent/:post_id", isAuthenticated, postController.commentPost)

export default router;
