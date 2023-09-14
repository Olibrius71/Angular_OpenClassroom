import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FirstCompListComponent} from "./snaps/components/first-comp-list/first-comp-list.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {SingleFirstCompComponent} from "./snaps/components/single-first-comp/single-first-comp.component";
import {CreateSnapComponent} from "./snaps/components/create-snap/create-snap.component";

const routes: Routes = [
  {path: "snaps", component: FirstCompListComponent},
  {path: "snaps/:id", component: SingleFirstCompComponent},
  {path: "create", component: CreateSnapComponent},
  {path: "", component: HomePageComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
