import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <div class="wrapper" [ngClass]="{ 'dark-theme': darkMode }">
      <div>
        <mat-slide-toggle [(ngModel)]="darkMode">
          Theme
        </mat-slide-toggle>
      </div>
      <app-co2-add></app-co2-add>
      <app-co2-list></app-co2-list>
    </div>
  `
})
export class AppComponent {
  darkMode = false;
  constructor() {}
}
