import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.29.0/mod.ts";

const client = new MongoClient();

// Connecting to a Local Database
await client.connect(
  "mongodb+srv://admin:bl3FF0ncLx1lUy9H@address-deno.y3nsg.mongodb.net/dev?authMechanism=SCRAM-SHA-1"
);

const db = client.database("dev");

export { client, db };
