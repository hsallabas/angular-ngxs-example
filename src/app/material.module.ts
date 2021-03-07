import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material";

@NgModule({
  exports: [
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
  ]
})
export class MaterialModule {}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
