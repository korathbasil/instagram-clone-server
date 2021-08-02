import express from "express";

import { userRoute } from "./REST/routes";

const app = express();

app.use(express.json());

app.use("/api/user", userRoute);

export default app;
