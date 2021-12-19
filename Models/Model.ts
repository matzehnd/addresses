import { Validator } from "./Validator.ts";

export abstract class Model {
  private Validator: Validator<this> = new Validator();
}
