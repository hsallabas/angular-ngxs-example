import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-co2-list",
  templateUrl: "./co2-list.component.html",
  styleUrls: ["./co2-list.component.scss"]
})
export class Co2ListComponent implements OnInit {
  displayedColumns: string[] = ["sector", "co2Value", "feeling"];
  co2list = [{ sector: "Fishing", co2Value: "35", feeling: "😀" }];

  constructor() {}

  ngOnInit(): void {}
}
