import {Component, OnInit} from '@angular/core';
import {Snap} from "../models/snap.model";
import {SnapService} from "../services/snap.service";

@Component({
  selector: 'app-first-comp-list',
  templateUrl: './first-comp-list.component.html',
  styleUrls: ['./first-comp-list.component.less']
})
export class FirstCompListComponent implements OnInit {
  snapList!: Snap[];

  constructor(private snapService: SnapService) {}

  ngOnInit(): void {
    this.snapList = this.snapService.getAllSnaps();
  }


}
