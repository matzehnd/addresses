import { GetAll } from "./../UseCases/GetAll.ts";
import { addressCollection } from "../DB/Collections/Address.collection.ts";
import { Controller } from "./Controller.ts";

const usecase = new GetAll(addressCollection);

export const getAllAddresses = new Controller(usecase, [], async () => {})
  .handle;
