import {Component, Input, OnInit} from '@angular/core';
import {Snap} from "./models/snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  snapList!: Snap[];

  ngOnInit(): void {
    this.snapList = [
      new Snap(
        "https://www.rynek-lotniczy.pl//img/20170919125904170919chopinawaw.jpg_678-443.jpg",
        "arrivée à varsovie",
        "Je viens d'arriver à Varsovie avec ma femme et mes enfants et je prends une photo de nous devant l'aéroport",
        4,
        "Varsovie"
      ),
      new Snap(
      "https://www.kaldewei.fr/fileadmin/_processed_/3/0/csm_1_Kaldewei_Hotel_Indigo_Warsaw_e4ac35d0d7.jpg",
      "Arrivée à l'hôtel",
      "Aprèsêtre sortis de l'aéroport, on s'est dirigé vers l'hôtel qu'on avait réservé et j'en ai pris une photo",
        47
      )
    ];
  }


}
