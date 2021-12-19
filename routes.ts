import { Router } from "https://deno.land/x/oak@v10.0.0/mod.ts";
import { addresses } from "./DB/Schemas/Address.schema.ts";

export const router = new Router();

router
  .get("/", async (ctx) => {
    ctx.response.body = await addresses
      .find({}, { noCursorTimeout: false })
      .toArray();
  })
  .post("/addPost", async (ctx) => {
    const address = await addresses.insertOne({
      street: "Brunngasse 89",
    });
    ctx.response.body = address;
  });
