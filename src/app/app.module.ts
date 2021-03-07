import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxsModule } from "@ngxs/store";

import { AppComponent } from "./app.component";
import { Co2AddComponent } from "./components/co2-add/co2-add.component";
import { EmojiModalComponent } from "./components/co2-add/emoji-modal/emoji-modal.component";
import { Co2ListComponent } from "./components/co2-list/co2-list.component";
import { MaterialModule } from "./material.module";
import { Co2ListState } from "./state/co2-list.state";
import { PickerModule } from "@ctrl/ngx-emoji-mart";
import { Co2SelectedState } from "./state/co2-selected.state";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxsModule.forRoot([Co2ListState, Co2SelectedState]),
    MaterialModule,
    PickerModule
  ],
  declarations: [
    AppComponent,
    Co2ListComponent,
    Co2AddComponent,
    EmojiModalComponent
  ],
  entryComponents: [EmojiModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
