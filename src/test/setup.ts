import { getConnection } from "typeorm";

import connectToDatabase from "../config/db";

before(async () => {
  await connectToDatabase((err) => {
    if (err) return console.error("Not onnected to TEST db");
  });
});

after(async () => {
  const connection = getConnection();
  await connection.close();
});
