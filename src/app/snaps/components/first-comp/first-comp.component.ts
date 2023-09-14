import {Component, Input, OnInit} from '@angular/core';
import {Snap} from "../../../core/models/snap.model";
import {SnapService} from "../../../core/services/snap.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.less']
})
export class FirstCompComponent implements OnInit {
  @Input() snap!: Snap;
  snapped!: boolean;
  buttonText!: string;

  constructor(private snapService: SnapService,
              private router: Router) {}

  ngOnInit(): void {
    this.snapped = false;
    this.buttonText = "SNAP";
  }


  viewSnap(): void {
    this.router.navigateByUrl("snaps/" + this.snap.id);
  }
}
