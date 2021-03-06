// import { NODE_ENV } from "./config/constants";
// if (NODE_ENV === "dev" || NODE_ENV === "test") {
//   import("dotenv").then((env) => env.config());
// }

import dotenv from "dotenv";

dotenv.config();

import ExpressApp from "./app";
import connectToDatabase from "./config/db";
import { PORT } from "./config/constants";

const startServer = () => {
  connectToDatabase((err, _) => {
    if (err) console.error(err);
    else {
      ExpressApp.listen(PORT, () => {
        console.info("Server started at PORT: " + PORT);
      });
    }
  });
};

startServer();
