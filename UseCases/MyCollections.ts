import { Bson, InsertDocument } from "https://deno.land/x/mongo@v0.29.0/mod.ts";
import { BaseSchema } from "../Models/Base.schema.ts";

export abstract class MyCollection<T extends BaseSchema> {
  public abstract getAll(): T[] | Promise<T[]>;

  public abstract getById(
    id: Bson.ObjectId
  ): T | undefined | Promise<T | undefined>;

  public abstract insertOne(entity: T): Promise<T>;

  public abstract updateOne(id: Bson.ObjectId, entity: T): Promise<T>;
}
