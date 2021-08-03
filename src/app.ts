import express from "express";
import fileUpload from "express-fileupload";

import { userRoute, postRoute } from "./api/routes";

const app = express();

app.use(express.json());
app.use(fileUpload());

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

export default app;
