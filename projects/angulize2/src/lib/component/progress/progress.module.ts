import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressCircularComponent } from './progress-circular/progress-circular.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [ProgressCircularComponent, ProgressBarComponent],
  imports: [
    CommonModule
  ],
  exports:[ ProgressCircularComponent,ProgressBarComponent ]
})
export class ProgressModule { }
