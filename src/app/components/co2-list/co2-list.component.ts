import { Component, OnInit } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { Co2 } from "../../models/co2.model";
import { Co2State } from "../../state/co2.state";

@Component({
  selector: "app-co2-list",
  templateUrl: "./co2-list.component.html",
  styleUrls: ["./co2-list.component.scss"]
})
export class Co2ListComponent implements OnInit {
  displayedColumns: string[] = ["sector", "co2Value", "feeling"];
  co2list = [{ sector: "Fishing", co2Value: "35", feeling: "😀" }];

  @Select(Co2State) list$: Observable<Co2>;

  constructor() {}

  ngOnInit(): void {}
}
