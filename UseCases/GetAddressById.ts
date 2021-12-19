import { UseCase } from "./UseCase.ts";
import { Address } from "./../Models/Address/Address.ts";

export class GetAddress implements UseCase<string, Address | undefined> {
  constructor(private repository: any) {}

  public execute(id: string): Address | undefined {
    return this.repository.getAddressById(id);
  }
}
