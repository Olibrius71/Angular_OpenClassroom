import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FirstCompListComponent} from "./first-comp-list/first-comp-list.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {path: "snaps", component: FirstCompListComponent},
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
