import { getConnection } from "typeorm";

import connectToDatabase from "../config/db";
import { User, Chat, UserChat } from "../api/models";

before(async () => {
  await connectToDatabase((err) => {
    if (err) return console.error("Not onnected to TEST db");
  });
});

beforeEach(async () => {
  await clearDatabase();
});

afterEach(async () => {});

after(async () => {
  await clearDatabase();
  await closeDatabase();
});

async function clearDatabase() {
  // const connection = getConnection();
  // const entities = connection.entityMetadatas;
  // for (const entity of entities) {
  //   const repository = connection.getRepository(entity.name); // Get repository
  //   await repository.delete({}); // Clear each entity table's content
  // }

  await UserChat.delete({});
  await Chat.delete({});
  await User.delete({});
}

async function closeDatabase() {
  const connection = getConnection();
  await connection.close();
}
