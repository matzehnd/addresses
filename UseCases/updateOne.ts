import { UseCase } from "./UseCase.ts";
import { AddressSchema } from "./../Models/Address/Address.schema.ts";
import { MyCollection } from "./MyCollections.ts";
import { Bson } from "https://deno.land/x/mongo@v0.29.0/mod.ts";

export class UpdateOne implements UseCase<AddressSchema, AddressSchema> {
  constructor(private addressRpository: MyCollection<AddressSchema>) {}

  public async execute(address: AddressSchema & { id: Bson.ObjectId }) {
    const { id, ...rest } = address;
    return this.addressRpository.updateOne(id, rest);
  }
}
