import express from "express";
import multer from "multer";

import { userRoute, postRoute } from "./api/routes";

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(multer().single("image"));

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

export default app;
