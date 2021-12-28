import { getConnection } from "typeorm";

import connectToDatabase from "../config/db";

before(async () => {
  await connectToDatabase((err) => {
    if (err) return console.error("Not onnected to TEST db");
  });
});

beforeEach(async () => {
  // const connection = getConnection();
  // await connection.query("START TRANSACTION");
});

afterEach(async () => {
  // await connection.dropDatabase();
});

after(async () => {
  const connection = getConnection();
  await connection.close();
});
