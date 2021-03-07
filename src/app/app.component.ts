import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <div class="main" [ngClass]="{ 'dark-theme': darkMode }">
      <div class="theme-toggle">
        <mat-slide-toggle [(ngModel)]="darkMode">
          Theme
        </mat-slide-toggle>
      </div>
      <div class="wrapper">
        <app-co2-add></app-co2-add>
        <app-co2-list></app-co2-list>
      </div>
    </div>
  `
})
export class AppComponent {
  darkMode = false;
  constructor() {}
}
