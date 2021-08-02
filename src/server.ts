import { NODE_ENV } from "./config/constants";
if (NODE_ENV === "dev" || NODE_ENV === "test") {
  import("dotenv").then((env) => env.config());
}

import ExpressApp from "./app";

import connectToDatabase from "./config/db";

const startServer = () => {
  connectToDatabase((err, _) => {
    if (err) console.error(err);
    else {
      ExpressApp.listen(3000, () => {
        console.info("Server started at PORT: " + 3000);
      });
    }
  });
};

startServer();
