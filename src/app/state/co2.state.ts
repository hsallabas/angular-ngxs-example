import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";
import { Co2 } from "../models/co2.model";
import { Add, Delete } from "./co2.actions";

export interface Co2StateModel {
  data: Co2[];
}

@State<Co2StateModel>({
  name: "Co2",
  defaults: {
    data: []
  }
})
@Injectable()
export class Co2State {
  @Action(Add)
  addCo2(ctx: StateContext<Co2StateModel>, action: Add) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      data: [...state.data, action.payload]
    });
  }

  @Action(Delete)
  deleteCo2(ctx: StateContext<Co2StateModel>, action: Delete) {
    const state = ctx.getState();
    state.data.splice(action.index, 1);
    ctx.setState({
      ...state,
      data: [...state.data]
    });
  }
}
