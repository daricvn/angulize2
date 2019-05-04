import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { RippleModule } from '../../directive/ripple/ripple.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    RippleModule
  ],
  exports:[ButtonComponent]
})
export class ButtonModule { }
