import { GetAll } from "./../UseCases/GetAll.ts";
import { addressCollection } from "../DB/Collections/Address.collection.ts";
import { Response } from "https://deno.land/x/oak@v10.0.0/response.ts";

const usecase = new GetAll(addressCollection);

export const getAllAddresses = ({ response }: { response: Response }) => {
  const addresses = usecase.execute();
  response.body = addresses;
};
