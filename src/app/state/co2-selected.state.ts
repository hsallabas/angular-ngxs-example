import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";
import { Co2 } from "../models/co2.model";
import { SelectItem } from "./co2.actions";

export interface Co2SelectedStateModel {
  data: Co2;
}

@State<Co2SelectedStateModel>({
  name: "Co2Selected",
  defaults: {
    data: {
      id: -1,
      sector: "",
      co2Value: "",
      feeling: ""
    }
  }
})
@Injectable()
export class Co2SelectedState {
  @Action(SelectItem)
  slectCo2(ctx: StateContext<Co2SelectedStateModel>, action: SelectItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      data: action.payload
    });
  }
}
