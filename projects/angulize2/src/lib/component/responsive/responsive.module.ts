import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveComponent } from './responsive.component';

@NgModule({
  declarations: [ResponsiveComponent],
  imports: [
    CommonModule
  ],
  exports:[ResponsiveComponent]
})
export class ResponsiveModule { }
