import {Component, Input, OnInit} from '@angular/core';
import {Snap} from "../models/snap.model";
import {SnapService} from "../services/snap.service";

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.less']
})
export class FirstCompComponent implements OnInit {
  @Input() snap!: Snap;
  snapped!: boolean;
  buttonText!: string;

  constructor(private snapService: SnapService) {}

  ngOnInit(): void {
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
