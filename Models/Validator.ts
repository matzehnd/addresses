import { Model } from "./Model.ts";

export class Validator<T extends Model> {
  public validate(model: T): boolean {
    return true;
  }
}
