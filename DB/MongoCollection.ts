import { MyCollection } from "../UseCases/MyCollections.ts";
import { Collection, Bson } from "https://deno.land/x/mongo@v0.29.0/mod.ts";
import { HttpError } from "./../Middlewares/HttpError.ts";
import { getUpdatDoc } from "./helpers/getUpdateDoc.ts";

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

  public async insertOne(entity: T) {
    const res = await this.mongoDbCollection.insertOne(entity);
    if (res instanceof Bson.ObjectId) {
      const insertedDoc = await this.getById(res);
      if (!insertedDoc) {
        throw new HttpError(500, "inserted Doc not found");
      }
      return insertedDoc;
    }

    throw new HttpError(500, "inserted Id is not Bson.ObjectId");
  }

  public async updateOne(id: Bson.ObjectId, entity: Partial<T>) {
    const update = getUpdatDoc(entity);
    await this.mongoDbCollection.updateOne({ _id: id }, update);

    const insertedDoc = await this.getById(id);
    if (!insertedDoc) {
      throw new HttpError(500, "updated Doc not found");
    }
    return insertedDoc;
  }
}
