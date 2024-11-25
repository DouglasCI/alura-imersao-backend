import "dotenv/config";
import { ObjectId } from "mongodb";
import connectToDatabase from "../config/dbConfig.js"

const connection = await connectToDatabase(process.env.MONGODB_CONNECTION_STRING);

async function getCollection() {
  const db = connection.db(process.env.MONGODB_DATABASE_NAME);
  return db.collection(process.env.MONGODB_COLLECTION_NAME);;
}

export async function getAllPosts() {
  const collection = await getCollection();

  return collection.find().toArray();
}

export async function insertPost(newPost) {
  const collection = await getCollection();

  return collection.insertOne(newPost);
}

export async function updatePost(id, post) {
  const collection = await getCollection();
  const objId = ObjectId.createFromHexString(id);

  return collection.updateOne({_id: new ObjectId(objId)}, {$set: post})
}