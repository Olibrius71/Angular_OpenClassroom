import {Component, Input, OnInit} from '@angular/core';
import {Snap} from "../models/snap.model";
import {SnapService} from "../services/snap.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-single-first-comp',
  templateUrl: './single-first-comp.component.html',
  styleUrls: ['./single-first-comp.component.less']
})
export class SingleFirstCompComponent implements OnInit {
  snap!: Snap;
  snap$!: Observable<Snap>;

  snapped!: boolean;
  buttonText!: string;

  snapId!: number;

  constructor(private snapService: SnapService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.snapId = +this.activatedRoute.snapshot.params["id"];
    this.snap$ = this.snapService.getSnapById(this.snapId);
    this.snapped = false;
    this.buttonText = "SNAP";
  }

  handleSnap(): void {
    if (!this.snapped) {
      this.snap$ = this.snapService.changeSnapById(this.snapId, true).pipe(
        tap(() => {
          this.snapped = true;
          this.buttonText = "SNAPPE";
        })
      );

    }
    else {
      this.snap$ = this.snapService.changeSnapById(this.snapId, false).pipe(
        tap(() => {
          this.snapped = false;
          this.buttonText = "SNAP";
        })
      );
    }

  }
}
