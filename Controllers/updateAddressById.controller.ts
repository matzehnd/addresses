import { addressCollection } from "../DB/Collections/Address.collection.ts";
import { Controller } from "./Controller.ts";
import { getIdParam } from "./paramGetters/getIdParam.ts";
import { UpdateOne } from "../UseCases/updateOne.ts";

const usecase = new UpdateOne(addressCollection);

const updateAddressById = new Controller(
  "/:id",
  usecase,
  [],
  async () => {
    return {};
  },
  getIdParam
);

export { updateAddressById };
