import { Bson } from "https://deno.land/x/mongo@v0.29.0/mod.ts";

export async function getIdParam({ id }: { id: string }) {
  return { id: new Bson.ObjectId(id) };
}
