import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { Co2 } from "../../models/co2.model";
import { Sector } from "../../models/sector.model";
import { Co2SelectedState } from "../../state/co2-selected.state";
import { Add, Update } from "../../state/co2.actions";
import { EmojiModalComponent } from "./emoji-modal/emoji-modal.component";

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
export class Co2AddComponent implements OnInit {
  co2DataForm: FormGroup;
  sectors = SECTOR_DATA;
  @Select(Co2SelectedState) selectedRow$: Observable<Co2>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.co2DataForm = this.fb.group({
      id: [-1],
      sector: ["", Validators.required],
      co2Value: [0, Validators.required],
      feeling: ["😀", Validators.required]
    });

    this.selectedRow$.pipe().subscribe(res => {
      if (res && res["data"] && res["data"].id >= 0) {
        this.co2DataForm.patchValue(res["data"]);
      }
    });
  }

  selectEmoji() {
    const dialogRef = this.dialog.open(EmojiModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.co2DataForm.patchValue({ feeling: result.emoji.native });
      }
    });
  }

  submit() {
    if (this.co2DataForm.valid) {
      if (this.co2DataForm.value.id > -1) {
        this.store.dispatch(new Update(this.co2DataForm.value));
      } else {
        this.store.dispatch(new Add(this.co2DataForm.value));
      }
       this.co2DataForm.reset();
    }
  }
}
