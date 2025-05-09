import mongoose from "mongoose";
import config from "../../config.js"

export async function connectMongo() {
  try {
    console.info("mongodb_connector: Connecting to database");
    await mongoose.connect(config.mongo_url)
    console.info("mongodb_connector: Connection Successful");
  } catch (error) {
    console.error("mongodb_connector: Connection Failed");
    throw error;
  }
}
