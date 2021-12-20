import { Body } from "../body.ts";
export interface UseCase<S, T extends Body> {
  execute(params: S): T | Promise<T>;
}
