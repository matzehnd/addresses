import { AddressSchema } from "../../Models/Address/Address.schema.ts";
import { Request } from "https://deno.land/x/oak@v10.0.0/request.ts";
import { HttpError } from "./../../Middlewares/HttpError.ts";
import Schema, {
  string,
  number,
} from "https://denoporter.sirjosh.workers.dev/v1/deno.land/x/computed_types/src/index.ts";

const postAddressSchema = {
  number: string.optional(),
  street: string.optional(),
  streetSuffix: string.optional(),
  city: string.optional(),
  state: string.optional(),
  zip: string.optional(),
  country: string.optional(),
  latitude: number.optional(),
  longitude: number.optional(),
};

export async function postAddress(request: Request): Promise<AddressSchema> {
  const body = await request.body().value;
  const schema = Schema(postAddressSchema).destruct();
  const [err, result] = schema.validator(body);

  if (err) {
    throw new HttpError(402, err.message);
  }

  if (!result) {
    throw new HttpError(402);
  }

  return result;
}
