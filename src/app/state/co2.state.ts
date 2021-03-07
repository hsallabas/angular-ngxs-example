import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";
import { Co2 } from "../models/co2.model";
import { Add } from "./co2.actions";

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
  feedZebra(ctx: StateContext<Co2StateModel>, action: Add) {
    const state = ctx.getState();
    console.log(action.payload);
    ctx.setState({
      ...state,
      data: [...state.data, action.payload]
    });
  }
}
