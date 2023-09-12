import {Component, Input, OnInit} from '@angular/core';
import {Snap} from "./models/snap.model";
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

  intervalToWatch$!: Observable<number>;

  ngOnInit(): void {
    this.intervalToWatch$ = interval(1000);

    this.intervalToWatch$.subscribe(value => {
      console.log(value);
    });

    setTimeout(() => { this.intervalToWatch$.subscribe(value => {
      console.log(value);
    })}, 3000);
  }

}
