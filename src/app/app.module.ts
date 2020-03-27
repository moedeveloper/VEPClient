import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { KomponentkartanModule } from 'vgr-komponentkartan';
import { StartsidaComponent } from './startsida/startsida.component';

@NgModule({
  declarations: [
    AppComponent,
    StartsidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KomponentkartanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
