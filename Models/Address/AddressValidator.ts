import { Address } from "./Address.ts";
import { Validator } from "./../Validator.ts";

export class AddressValidator extends Validator<Address> {
  public validate(address: Address): boolean {
    if (!address.country) {
      return false;
    }

    if (!address.street) {
      return false;
    }

    return true;
  }
}
