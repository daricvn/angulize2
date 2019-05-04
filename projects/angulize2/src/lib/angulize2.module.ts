import { NgModule } from '@angular/core';
import { AppModule } from './styles/app/app.module';
import { RowModule } from './component/row/row.module';
import { ButtonModule } from './component/button/button.module';
import { ProgressModule } from './component/progress/progress.module';

@NgModule({
  declarations: [ ],
  imports: [
    AppModule, RowModule, ButtonModule, ProgressModule
  ],
  exports: [ AppModule,RowModule, ButtonModule, ProgressModule]
})
export class Angulize2Module { }
