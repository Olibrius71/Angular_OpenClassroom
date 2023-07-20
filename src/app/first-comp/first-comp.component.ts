import {Component, Input, OnInit} from '@angular/core';
import {Snap} from "../models/snap.model";

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.less']
})
export class FirstCompComponent implements OnInit {
  @Input() snap!: Snap;
  snapped!: boolean;
  buttonText!: string;

  ngOnInit(): void {
    this.snapped = false;
    this.buttonText = "SNAP";
  }

  handleSnap(): void {
    if (!this.snapped) {
      this.snap.snaps++;
      this.snapped = true;
      this.buttonText = "SNAPPE";
    }
    else {
      this.snap.snaps--;
      this.snapped = false;
      this.buttonText = "SNAP";
    }

  }
}
