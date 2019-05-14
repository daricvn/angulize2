import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { RippleModule } from '../../directive/ripple/ripple.module';
import { ProgressModule } from '../progress/progress.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    RippleModule,
    ProgressModule
  ],
  exports:[ButtonComponent]
})
export class ButtonModule { }
