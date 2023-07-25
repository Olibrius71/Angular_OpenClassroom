import {Component, Input, OnInit} from '@angular/core';
import {Snap} from "../models/snap.model";
import {SnapService} from "../services/snap.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-first-comp',
  templateUrl: './single-first-comp.component.html',
  styleUrls: ['./single-first-comp.component.less']
})
export class SingleFirstCompComponent implements OnInit {
  snap!: Snap;
  snapped!: boolean;
  buttonText!: string;

  constructor(private snapService: SnapService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const snapId = +this.activatedRoute.snapshot.params["id"];
    this.snap = this.snapService.getSnapById(snapId);
    this.snapped = false;
    this.buttonText = "SNAP";
  }

  handleSnap(): void {
    if (!this.snapped) {
      this.snapService.changeSnapById(this.snap.id, true);
      this.snapped = true;
      this.buttonText = "SNAPPE";
    }
    else {
      this.snapService.changeSnapById(this.snap.id, false)
      this.snapped = false;
      this.buttonText = "SNAP";
    }

  }
}
