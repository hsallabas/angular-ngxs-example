import { Co2 } from "../models/co2.model";

export class Add {
  static readonly type = "[Co2] Add";
  constructor(public payload: Co2) {}
}

export class Delete {
  static readonly type = "[Co2] Delete";
  constructor(public index: number) {}
}

export class SelectItem {
  static readonly type = "[Co2] SelectItem";
  constructor(public payload: Co2) {}
}

export class Update {
  static readonly type = "[Co2] Update";
  constructor(public payload: Co2) {}
}
