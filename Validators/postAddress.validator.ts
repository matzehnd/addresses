import { AddressSchema } from "./../Models/Address/Address.schema.ts";
import { Request } from "https://deno.land/x/oak@v10.0.0/request.ts";

export async function postAddress(request: Request): Promise<AddressSchema> {
  const body = await request.body().value;
  return {
    street: body.street,
  };
}
