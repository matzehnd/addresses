import { addressCollection } from "../DB/Collections/Address.collection.ts";
import { InsertOne } from "./../UseCases/InsertOne.ts";
import { postAddress } from "./Validators/postAddress.validator.ts";
import { Controller } from "./Controller.ts";
import { defaultParamGetter } from "./paramGetters/default.paramGetter.ts";

const usecase = new InsertOne(addressCollection);

export const insertAnAddress = new Controller(
  "/",
  usecase,
  [],
  postAddress,
  defaultParamGetter
);
