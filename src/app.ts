import express from "express";

import { userRoute } from "./REST/routes";

const app = express();

app.use("/api", userRoute);

export default app;
