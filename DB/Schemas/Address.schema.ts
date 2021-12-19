import { Bson } from "https://deno.land/x/mongo@v0.29.0/mod.ts";
import { db } from "../db.ts";

interface AddressSchema {
  _id: Bson.ObjectId;
  number?: string;
  street?: string;
  streetSuffix?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
}

const addresses = db.collection<AddressSchema>("addresses");

export { addresses };
