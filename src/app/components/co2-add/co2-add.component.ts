import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-co2-add",
  templateUrl: "./co2-add.component.html",
  styleUrls: ["./co2-add.component.scss"]
})
export class Co2AddComponent implements OnInit {
  co2DataForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.co2DataForm = this.fb.group({
      sector: ["", Validators.required],
      co2Value: [0, Validators.required],
      feeling: ["😀", Validators.required]
    });
  }
}
