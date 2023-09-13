import {Injectable} from "@angular/core";
import {Snap} from "../models/snap.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SnapService {
  snapList: Snap[] = [
    new Snap(
      1,
      "https://www.rynek-lotniczy.pl//img/20170919125904170919chopinawaw.jpg_678-443.jpg",
      "arrivée à varsovie",
      "Je viens d'arriver à Varsovie avec ma femme et mes enfants et je prends une photo de nous devant l'aéroport",
      4,
      "Varsovie"
    ),
    new Snap(
      2,
      "https://www.kaldewei.fr/fileadmin/_processed_/3/0/csm_1_Kaldewei_Hotel_Indigo_Warsaw_e4ac35d0d7.jpg",
      "Arrivée à l'hôtel",
      "Après être sortis de l'aéroport, on s'est dirigé vers l'hôtel qu'on avait réservé et j'en ai pris une photo",
      47
    )
  ];

  lastId: number = 2;

  constructor(private httpClient: HttpClient) {
  }

  getAllSnaps():  Observable<Snap[]> {
    return this.httpClient.get<Snap[]>("http://localhost:3000/snaps");
  }

  getSnapById(snapToGetId: number): Observable<Snap> {
    const snapToGet = this.httpClient.get<Snap>(`http://localhost:3000/snaps/${snapToGetId}`);
    if (!snapToGet) {
      throw new Error("Error while getting snap (because snapToGet is undefined)");
    }
    return snapToGet;
  }

  changeSnapById(snapToUpdateId: number, addingSnap: boolean): Observable<Snap> {
    return this.getSnapById(snapToUpdateId)
      .pipe(
        map(snap => ({
          ...snap, snaps: (addingSnap) ? snap.snaps + 1 : snap.snaps - 1
        })
      ),
      switchMap(updatedSnap =>
        this.httpClient.put<Snap>("http://localhost:3000/snaps/" + snapToUpdateId, updatedSnap)
      ))
  }


  addSnap(formInputs: { title: string, description: string, imageUrl: string, location: string} ): void {
    const newSnap = new Snap(
      this.lastId + 1,
      formInputs.imageUrl,
      formInputs.title,
      formInputs.description,
      0,
      formInputs.location
    )
    this.snapList.push(newSnap);

    this.lastId++;
  }
}

