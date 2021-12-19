import { UseCase } from "./UseCase.ts";
import { AddressSchema } from "./../Models/Address/Address.schema.ts";
import { MyCollection } from "../Models/MyCollections.ts";

export class GetAll implements UseCase<null, AddressSchema[]> {
  constructor(private addressRpository: MyCollection<AddressSchema>) {}

  public async execute() {
    return this.addressRpository.getAll();
  }
}
