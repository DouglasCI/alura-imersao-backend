import { MongoClient } from "mongodb";

export default async function connectToDatabase(connectionString) {
  let client;

  try {
    client = new MongoClient(connectionString);
    console.log("Connecting to the cluster from the database...");
    await client.connect();
    console.log("Successfully connected to MongoDB!");
    return client;
  } catch (error) {
    console.error(`Failed to connect to the database: ${error.message}`);
    process.exit();
  }
}