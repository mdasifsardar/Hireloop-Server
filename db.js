import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://<db_username>:<db_password>@cluster0.zxp69r2.mongodb.net/",
);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

connectToMongoDB();
