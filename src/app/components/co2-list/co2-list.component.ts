import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { Co2 } from "../../models/co2.model";
import { Delete, SelectItem } from "../../state/co2.actions";
import { Co2ListState } from "../../state/co2-list.state";

@Component({
  selector: "app-co2-list",
  templateUrl: "./co2-list.component.html",
  styleUrls: ["./co2-list.component.scss"]
})
export class Co2ListComponent implements OnInit {
  displayedColumns: string[] = ["sector", "co2Value", "feeling", "editButtons"];
  @Select(Co2ListState) list$: Observable<Co2>;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  /**
   * Edit co2 row value according to index
   */
  edit(item: Co2, index: number) {
    const selectedRow = { ...item, id: index };
    this.store.dispatch(new SelectItem(selectedRow));
  }

  /**
   * Delete co2 row according to index
   */
  delete(index: number) {
    this.store.dispatch(new Delete(index));
  }
}
