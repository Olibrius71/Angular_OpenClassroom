import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './snaps/components/first-comp/first-comp.component';
import { FirstCompListComponent } from './snaps/components/first-comp-list/first-comp-list.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomePageComponent } from './home-page/home-page.component';
import { SingleFirstCompComponent } from './snaps/components/single-first-comp/single-first-comp.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateSnapComponent } from './snaps/components/create-snap/create-snap.component';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {SnapsModule} from "./snaps/snaps.module";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    SnapsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
