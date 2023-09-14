import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FirstCompComponent} from "./components/first-comp/first-comp.component";
import {FirstCompListComponent} from "./components/first-comp-list/first-comp-list.component";
import {SingleFirstCompComponent} from "./components/single-first-comp/single-first-comp.component";
import {CreateSnapComponent} from "./components/create-snap/create-snap.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    FirstCompComponent,
    FirstCompListComponent,
    SingleFirstCompComponent,
    CreateSnapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FirstCompComponent,
    FirstCompListComponent,
    SingleFirstCompComponent,
    CreateSnapComponent
  ]
})
export class SnapsModule { }
