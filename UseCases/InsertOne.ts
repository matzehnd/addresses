import { UseCase } from "./UseCase.ts";
import { AddressSchema } from "./../Models/Address/Address.schema.ts";
import { MyCollection } from "../Models/MyCollections.ts";

export class InsertOne implements UseCase<AddressSchema, AddressSchema> {
  constructor(private addressRpository: MyCollection<AddressSchema>) {}

  public async execute(address: AddressSchema) {
    return this.addressRpository.insertOne(address);
  }
}
