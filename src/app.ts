import express, { Response } from "express";
import cors from "cors";
import multer from "multer";

import { CLIENT_URL } from "./config/constants";
import { userRoute, postRoute, fileRoute } from "./api/routes";

const app = express();

app.use(cors({ origin: CLIENT_URL }));
app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(multer().single("image"));

app.get("/", (_, res: Response) => {
  res.status(200).json({ success: true, message: "Hello World" });
});

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/file", fileRoute);

export default app;
