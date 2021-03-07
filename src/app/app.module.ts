import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxsModule } from "@ngxs/store";

import { AppComponent } from "./app.component";
import { Co2AddComponent } from "./components/co2-add/co2-add.component";
import { Co2ListComponent } from "./components/co2-list/co2-list.component";
import { MaterialModule } from "./material.module";
import { Co2State } from "./state/co2.state";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([Co2State]),
    MaterialModule
  ],
  declarations: [AppComponent, Co2ListComponent, Co2AddComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
