import ExpressApp from "./app";

import { NODE_ENV } from "./config/constants";

if (NODE_ENV === "dev" || NODE_ENV === "test") {
  import("dotenv").then((env) => env.config());
}

const startServer = () => {
  ExpressApp.listen(3000, () => {
    console.info("Server started at PORT: " + 3000);
  });
};

startServer();
