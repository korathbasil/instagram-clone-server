import express from "express";

import { userRoute, postRoute } from "./api/routes";

const app = express();

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

export default app;
