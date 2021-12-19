import { Model } from "./Model.ts";

export class Persistent {
  public save(model: Model) {
    console.log(model);
  }
}
