import { GetAll } from "./../UseCases/GetAll.ts";
import { addressCollection } from "../DB/Collections/Address.collection.ts";
import { Controller } from "./Controller.ts";
import { defaultParamGetter } from "./paramGetters/default.paramGetter.ts";

const usecase = new GetAll(addressCollection);

const getAllAddresses = new Controller(
  "/",
  usecase,
  [],
  async () => {},
  defaultParamGetter
);

export { getAllAddresses };
