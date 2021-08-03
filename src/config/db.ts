import { createConnection, Connection } from "typeorm";

import { DB_PASSWORD } from "./constants";

import { User, Post } from "../api/models";

type dbConnectionCallback = (
  err: string | null,
  connection: Connection | undefined
) => void;

const connectToDatabase = async (done: dbConnectionCallback) => {
  const connection = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: DB_PASSWORD,
    database: "instagram_clone_db",
    synchronize: true,
    entities: [User, Post],
  });

  if (!connection) return done("Cannot connect to the database", undefined);
  done(null, connection);
};

export default connectToDatabase;
