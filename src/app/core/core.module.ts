import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import {httpInterceptorProviders} from "../interceptors";
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";
import {FirstCompComponent} from "../snaps/components/first-comp/first-comp.component";
import {FirstCompListComponent} from "../snaps/components/first-comp-list/first-comp-list.component";
import {HomePageComponent} from "../home-page/home-page.component";
import {SingleFirstCompComponent} from "../snaps/components/single-first-comp/single-first-comp.component";
import {CreateSnapComponent} from "../snaps/components/create-snap/create-snap.component";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "fr-FR" },
    httpInterceptorProviders
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
