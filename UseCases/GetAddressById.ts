import { UseCase } from "./UseCase.ts";
import { AddressSchema } from "./../Models/Address/Address.schema.ts";
import { MyCollection } from "./MyCollections.ts";
import { Bson } from "https://deno.land/x/mongo@v0.29.0/mod.ts";

export class GetAddressById
  implements UseCase<{ id: Bson.ObjectId }, AddressSchema | undefined>
{
  constructor(private addressRpository: MyCollection<AddressSchema>) {}

  public execute({ id }: { id: Bson.ObjectId }) {
    return this.addressRpository.getById(id);
  }
}
