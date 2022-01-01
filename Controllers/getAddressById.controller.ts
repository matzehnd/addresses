import { addressCollection } from "../DB/Collections/Address.collection.ts";
import { Controller } from "./Controller.ts";
import { GetAddressById } from "./../UseCases/GetAddressById.ts";
import { getIdParam } from "./paramGetters/getIdParam.ts";

const usecase = new GetAddressById(addressCollection);

const getAddressById = new Controller(
  "/:id",
  usecase,
  [],
  async () => {
    return {};
  },
  getIdParam
);

export { getAddressById };
