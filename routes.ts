import { Router } from "https://deno.land/x/oak@v10.0.0/mod.ts";
import { getAllAddresses } from "./Controllers/getAllAddresses.controller.ts";
import { insertAnAddress } from "./Controllers/insertAnAddress.controller.ts";

export const router = new Router();

router.get("/", getAllAddresses.handle).post("/", insertAnAddress.handle);
