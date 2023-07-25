import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import {registerLocaleData} from "@angular/common";
import * as fr from '@angular/common/locales/fr';
import { FirstCompListComponent } from './first-comp-list/first-comp-list.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomePageComponent } from './home-page/home-page.component';
import { SingleFirstCompComponent } from './single-first-comp/single-first-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    FirstCompListComponent,
    HeaderComponent,
    HomePageComponent,
    SingleFirstCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "fr-FR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
