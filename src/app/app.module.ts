import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Angulize2Module } from 'projects/angulize2/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angulize2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
