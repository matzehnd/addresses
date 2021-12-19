import { Application } from "https://deno.land/x/oak@v10.0.0/mod.ts";
import { router } from "./routes.ts";

const app = new Application();

app.use(router.routes());

app.use(router.allowedMethods());

console.log("listening on Port 8000");
await app.listen("127.0.0.1:8000");
