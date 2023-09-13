import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit{

  userEmail!: string;

  constructor(private router: Router) {}

  goToSnapsPage() {
    this.router.navigateByUrl("snaps");
  }

  ngOnInit(): void {
    this.userEmail = "gez";
  }

  OnSubmitForm(formulaire: NgForm): void {
    console.log(formulaire.value);
  }

  goToCreateSnap(): void {
    this.router.navigateByUrl("create");
  }
}
