import { BaseSchema } from "../Base.schema.ts";

export interface AddressSchema extends BaseSchema {
  number?: string;
  street?: string;
  streetSuffix?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
}
