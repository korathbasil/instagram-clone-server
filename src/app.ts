import express, { Response } from "express";
import multer from "multer";

import { userRoute, postRoute } from "./api/routes";

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(multer().single("image"));

app.get("/", (_, res: Response) => {
  res.status(200).json({ success: true, message: "Hello World" });
});

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

export default app;
