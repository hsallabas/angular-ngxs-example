import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { Select, Store } from "@ngxs/store";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Co2 } from "../../models/co2.model";
import { Sector } from "../../models/sector.model";
import { Co2SelectedState } from "../../state/co2-selected.state";
import { Add, SelectItem, Update } from "../../state/co2.actions";
import { EmojiModalComponent } from "./emoji-modal/emoji-modal.component";
import { NoneNegative } from "./none-negative-validator.directive";

const EMPTY_CO2: Co2 = {
  id: -1,
  sector: "",
  co2Value: "",
  feeling: ""
};

const SECTOR_DATA: Sector[] = [
  { id: 1, name: "Construction" },
  { id: 2, name: "Food Industry" },
  { id: 3, name: "Energy Industry" },
  { id: 4, name: "Tourism" },
  { id: 4, name: "Transportation" }
];

@Component({
  selector: "app-co2-add",
  templateUrl: "./co2-add.component.html",
  styleUrls: ["./co2-add.component.scss"]
})
export class Co2AddComponent implements OnInit, OnDestroy {
  co2DataForm: FormGroup;
  sectors = SECTOR_DATA;
  @Select(Co2SelectedState) selectedRow$: Observable<Co2>;
  public unsubscribe$ = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.co2DataForm = this.fb.group({
      id: [-1],
      sector: ["", [Validators.required]],
      co2Value: ["", [Validators.required]],
      feeling: ["😀", [Validators.required]]
    });
    this.co2DataForm.setValidators(NoneNegative);

    this.selectedRow$.pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
      if (res && res["data"] && res["data"].id >= 0) {
        this.co2DataForm.patchValue(res["data"]);
      }
    });
  }

  public ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  selectEmoji() {
    const dialogRef = this.dialog.open(EmojiModalComponent, {
      panelClass: "my-full-screen-dialog"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.co2DataForm.patchValue({ feeling: result.emoji.native });
      }
    });
  }

  submit() {
    console.log(this.co2DataForm.valid);
    if (this.co2DataForm.valid) {
      if (this.co2DataForm.value.id > -1) {
        this.store.dispatch(new Update(this.co2DataForm.value));
      } else {
        this.store.dispatch(new Add(this.co2DataForm.value));
      }
      this.store.dispatch(new SelectItem(EMPTY_CO2));
      this.co2DataForm.patchValue(EMPTY_CO2);
    }
  }
}
