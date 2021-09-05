import { Router } from "express";

import { fileController } from "../controllers";

const router = Router();

router.get("/image/:id", fileController.getImage);

export default router;
