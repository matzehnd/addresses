import { addressCollection } from "../DB/Collections/Address.collection.ts";
import { InsertOne } from "./../UseCases/InsertOne.ts";
import { Bson } from "https://deno.land/x/mongo@v0.29.0/mod.ts";
import { Controller } from "./Controller.ts";

const usecase = new InsertOne(addressCollection);

export const insertAnAddress = new Controller(usecase, [], async () => {
  return { _id: new Bson.ObjectId() };
});
