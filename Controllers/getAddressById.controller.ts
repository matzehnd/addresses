import { addressCollection } from "../DB/Collections/Address.collection.ts";
import { Controller } from "./Controller.ts";
import { GetAddressById } from "./../UseCases/GetAddressById.ts";
import { Bson } from "https://deno.land/x/mongo@v0.29.0/mod.ts";

const usecase = new GetAddressById(addressCollection);

const getAddressById = new Controller(
  "/:id",
  usecase,
  [],
  async () => {
    return {};
  },
  async ({ id }) => {
    return { id: new Bson.ObjectId(id) };
  }
);

export { getAddressById };
