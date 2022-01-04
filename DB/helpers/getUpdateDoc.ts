import { UpdateFilter } from "https://deno.land/x/mongo@v0.29.0/src/types.ts";
import { BaseSchema } from "./../../Models/Base.schema.ts";
import { AddressSchema } from "./../../Models/Address/Address.schema.ts";
// deno-lint-ignore-file
export function getUpdatDoc<T extends BaseSchema>(body: T): any {
  delete body._id;
  return { $set: body };
}
