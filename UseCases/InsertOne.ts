import { UseCase } from "./UseCase.ts";
import { AddressSchema } from "./../Models/Address/Address.schema.ts";
import { MyCollection } from "../Models/MyCollections.ts";
import { Bson } from "https://deno.land/x/mongo@v0.29.0/mod.ts";

export class InsertOne
  implements UseCase<AddressSchema, AddressSchema | Bson.ObjectId>
{
  constructor(private addressRpository: MyCollection<AddressSchema>) {}

  public async execute(address: AddressSchema) {
    return this.addressRpository.insertOne(address);
  }
}
