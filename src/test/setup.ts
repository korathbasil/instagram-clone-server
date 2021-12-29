import { getConnection } from "typeorm";

import connectToDatabase from "../config/db";

before(async () => {
  await connectToDatabase((err) => {
    if (err) return console.error("Not onnected to TEST db");
  });
});

beforeEach(async () => {
  const connection = getConnection();

  const entities = connection.entityMetadatas;

  for (const entity of entities) {
    const repository = connection.getRepository(entity.name); // Get repository
    await repository.clear(); // Clear each entity table's content
  }
});

afterEach(async () => {});

after(async () => {
  const connection = getConnection();
  await connection.close();
});
