import { Bson } from "https://deno.land/x/mongo@v0.29.0/mod.ts";
import { db } from "../db.ts";
import { AddressSchema } from "./../../Models/Address/Address.schema.ts";
import { MongoCollection } from "./../MongoCollection.ts";

const addressCollection = new MongoCollection(
  db.collection<AddressSchema>("addresses")
);

export { addressCollection };
