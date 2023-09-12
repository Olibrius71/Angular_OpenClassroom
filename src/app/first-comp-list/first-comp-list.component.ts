import {Component, OnDestroy, OnInit} from '@angular/core';
import {Snap} from "../models/snap.model";
import {SnapService} from "../services/snap.service";
import {interval, Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-first-comp-list',
  templateUrl: './first-comp-list.component.html',
  styleUrls: ['./first-comp-list.component.less']
})
export class FirstCompListComponent implements OnInit, OnDestroy {
  snapList!: Snap[];
  private destroyed$!: Subject<boolean>;

  constructor(private snapService: SnapService) {}

  ngOnInit(): void {
    this.snapList = this.snapService.getAllSnaps();
    this.destroyed$ = new Subject<boolean>();

    interval(560)
      .pipe(
        tap(console.log),
        takeUntil(this.destroyed$)
        )
      .subscribe()
    ;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }


}
