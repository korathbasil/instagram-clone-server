import express, { Response } from "express";
import cors from "cors";
import multer from "multer";

import { CLIENT_URL } from "./config/constants";
import { appRouter } from "./api/routes";

const app = express();

app.use(cors({ origin: CLIENT_URL }));

app.use(express.json());
app.use(multer().single("image"));

app.use("/api/v1", appRouter);

export { app as ExpressApp };
