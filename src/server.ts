import ExpressApp from "./app";

const startServer = () => {
  ExpressApp.listen(3000, () => {
    console.info("Server started at PORT: " + 3000);
  });
};

startServer();
