import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <div>
      <app-co2-add></app-co2-add>
      <app-co2-list></app-co2-list>
    </div>
  `
})
export class AppComponent {
  constructor() {}
}
