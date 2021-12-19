import { MyCollection } from "../Models/MyCollections.ts";
import { Collection, Bson } from "https://deno.land/x/mongo@v0.29.0/mod.ts";

export class MongoCollection<T> extends MyCollection<T> {
  constructor(private mongoDbCollection: Collection<T>) {
    super();
  }

  public getAll() {
    return this.mongoDbCollection
      .find({}, { noCursorTimeout: false })
      .toArray();
  }

  public getById(id: Bson.ObjectId) {
    return this.mongoDbCollection.findOne(
      { _id: id },
      { noCursorTimeout: false }
    );
  }

  public insertOne(entity: T) {
    return this.mongoDbCollection.insertOne(entity);
  }
}
