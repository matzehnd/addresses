import { Router } from "https://deno.land/x/oak@v10.0.0/mod.ts";
import { getAllAddresses } from "./Controllers/getAllAddresses.controller.ts";
import { insertAnAddress } from "./Controllers/insertAnAddress.controller.ts";
import { getAddressById } from "./Controllers/getAddressById.controller.ts";

export const router = new Router();

router
  .get(getAllAddresses.route, getAllAddresses.handle)
  .post(insertAnAddress.route, insertAnAddress.handle)
  .get(getAddressById.route, getAddressById.handle)
  .get("/", (ctx) => ctx);
