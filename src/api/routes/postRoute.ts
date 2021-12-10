import { Router } from "express";

import { PostController } from "../controllers";

import { isAuthenticated } from "../middlewares";

const router = Router();

router.get("/", isAuthenticated, PostController.getAllPosts);

router.post("/create", isAuthenticated, PostController.createPost);

router.post("/like/:post_id", isAuthenticated, PostController.likePost);

router.post("/comment/:post_id", isAuthenticated, PostController.commentPost);

export default router;
