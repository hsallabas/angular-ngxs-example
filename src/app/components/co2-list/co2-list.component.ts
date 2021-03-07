import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { Co2 } from "../../models/co2.model";
import { Delete } from "../../state/co2.actions";
import { Co2State } from "../../state/co2.state";

@Component({
  selector: "app-co2-list",
  templateUrl: "./co2-list.component.html",
  styleUrls: ["./co2-list.component.scss"]
})
export class Co2ListComponent implements OnInit {
  displayedColumns: string[] = ["sector", "co2Value", "feeling", "editButtons"];
  @Select(Co2State) list$: Observable<Co2>;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  edit(item: Co2, index: number) {
    console.log(item);
    console.log(index);
  }

  delete(index: number) {
    this.store.dispatch(new Delete(index));
  }
}
