import { AddressValidator } from "./AddressValidator.ts";
import { Model } from "./../Model.ts";

export class Address extends Model {
  private _number?: string;
  private _street?: string;
  private _streetSuffix?: string;
  private _city?: string;
  private _state?: string;
  private _zip?: string;
  private _country?: string;
  private _latitude?: number;
  private _longitude?: number;
  private validator = new AddressValidator();

  public get number() {
    return this._number;
  }

  public get street() {
    return this._street;
  }

  public get streetSuffix() {
    return this._streetSuffix;
  }

  public get city() {
    return this._city;
  }

  public get state() {
    return this._state;
  }

  public get zip() {
    return this._zip;
  }

  public get country() {
    return this._country;
  }

  public get latitude() {
    return this._latitude;
  }

  public get longitude() {
    return this._longitude;
  }
}
