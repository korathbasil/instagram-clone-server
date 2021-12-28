import { Router } from "express";

import { userRouter } from "./user.router";
import { postRouter } from "./post.router";
import { fileRouter } from "./fileRoute";

const router = Router();

router.use("/user", userRouter);
router.use("/post", postRouter);
router.use("/file", fileRouter);

export { router as appRouter };
