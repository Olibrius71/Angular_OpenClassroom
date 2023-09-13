import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Snap} from "../models/snap.model";
import {SnapService} from "../services/snap.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-snap',
  templateUrl: './create-snap.component.html',
  styleUrls: ['./create-snap.component.less']
})
export class CreateSnapComponent implements OnInit{

  snapForm!: FormGroup;

  snapPreview$!: Observable<Snap>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder, private snapService: SnapService, private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.snapForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    }, {
      updateOn: "blur"
    });

    this.snapPreview$ = this.snapForm.valueChanges;

  }

  onSubmitForm() {
    this.snapService.addSnap(this.snapForm.value);
    this.router.navigateByUrl("snaps");
  }
}
