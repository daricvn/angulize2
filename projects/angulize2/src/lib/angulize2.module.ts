import { NgModule } from '@angular/core';
import { AppModule } from './styles/app/app.module';
import { FlexModule } from './component/flex/flex.module';
import { ButtonModule } from './component/button/button.module';
import { ProgressModule } from './component/progress/progress.module';
import { CardModule } from './component/card/card.module';
import { RippleModule } from './directive/ripple/ripple.module';
import { HoverModule } from './directive/hover/hover.module';
import { DividerModule } from './component/divider/divider.module';
import { BadgeModule } from './component/badge/badge.module';
import { ChipModule } from './component/chip/chip.module';

@NgModule({
  declarations: [],
  imports: [
    AppModule, FlexModule, ButtonModule, ProgressModule, CardModule, RippleModule, HoverModule,
    DividerModule, BadgeModule, ChipModule
  ],
  exports: [ AppModule,FlexModule, ButtonModule, ProgressModule, CardModule, RippleModule, HoverModule,
  DividerModule, BadgeModule, ChipModule]
})
export class Angulize2Module { }
