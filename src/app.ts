import express from "express";

import { userRoute } from "./api/routes";

const app = express();

app.use(express.json());

app.use("/api/user", userRoute);

export default app;
