import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { Sector } from "../../models/sector.model";
import { Add } from "../../state/co2.actions";

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

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.co2DataForm = this.fb.group({
      sector: ["", Validators.required],
      co2Value: [0, Validators.required],
      feeling: ["😀", Validators.required]
    });
  }

  submit() {
    this.store.dispatch(new Add(this.co2DataForm.value));
  }
}
