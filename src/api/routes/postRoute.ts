import { Router } from "express";

import { postController } from "../controllers";

const router = Router();

router.post("/create", postController.createPost);

export default router;
