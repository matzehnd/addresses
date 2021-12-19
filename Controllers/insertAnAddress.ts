import { addressCollection } from "../DB/Collections/Address.collection.ts";
import { Response } from "https://deno.land/x/oak@v10.0.0/response.ts";
import { Context } from "https://deno.land/x/oak@v10.0.0/context.ts";
import { InsertOne } from "./../UseCases/InsertOne.ts";
import { AddressSchema } from "./../Models/Address/Address.schema.ts";

const usecase = new InsertOne(addressCollection);

export const insertAnAddress = async ({ request, response }: Context) => {
  const body = await request.body();
  if (request.hasBody) {
    const address: AddressSchema | any = body.value;
    const newAddress: AddressSchema = usecase.execute(address);
    response.status = 201;
    response.body = {
      status: true,
      data: newAddress,
    };
  } else {
    response.status = 400;
    response.body = {
      status: false,
      msg: "No data",
    };
  }
};
