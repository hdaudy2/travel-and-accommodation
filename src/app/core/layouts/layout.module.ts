import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { RouterModule } from '@angular/router';

import { LayoutComponent } from "./components/layout.component";

// COMPONENTS
const COMPONENTS = [
  LayoutComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [
    ...COMPONENTS
  ],
})
export class layoutModule {}
