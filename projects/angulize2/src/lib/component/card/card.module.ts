import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardActionComponent } from '../Card/card-action/card-action.component';
import { CardPlaceholderComponent } from '../Card/card-placeholder/card-placeholder.component';

@NgModule({
  declarations: [CardComponent, CardContentComponent, CardActionComponent, CardPlaceholderComponent],
  imports: [
    CommonModule
  ],
  exports:[ CardComponent, CardContentComponent,CardActionComponent, CardPlaceholderComponent]
})
export class CardModule { }
