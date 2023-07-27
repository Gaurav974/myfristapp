import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Headercomponet } from './header/header.component';
import { Navbarcomponenet } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Headercomponet,
    Navbarcomponenet,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
