import {Component, OnDestroy, OnInit} from '@angular/core';
import {Snap} from "../../../core/models/snap.model";
import {SnapService} from "../../../core/services/snap.service";
import {interval, Observable, Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-first-comp-list',
  templateUrl: './first-comp-list.component.html',
  styleUrls: ['./first-comp-list.component.less']
})
export class FirstCompListComponent implements OnInit, OnDestroy {
  snapList$!: Observable<Snap[]>;
  private destroyed$!: Subject<boolean>;

  constructor(private snapService: SnapService) {}

  ngOnInit(): void {
    this.snapList$ = this.snapService.getAllSnaps();
    this.destroyed$ = new Subject<boolean>();

    interval(560)
      .pipe(
        takeUntil(this.destroyed$)
        )
      .subscribe()
    ;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }


}
