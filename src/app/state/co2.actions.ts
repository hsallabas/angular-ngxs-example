import { Co2 } from "../models/co2.model";

export class Add {
  static readonly type = "[Co2] Add";
  constructor(public payload: Co2) {}
}

export class Delete {
  static readonly type = "[Co2] Delete";
  constructor(public index: number) {}
}
