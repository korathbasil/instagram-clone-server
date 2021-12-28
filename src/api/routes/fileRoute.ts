import { Router } from "express";

import { fileController } from "../controllers";

const router = Router();

router.get("/image/:filename", fileController.getImage);

export { router as fileRouter };
