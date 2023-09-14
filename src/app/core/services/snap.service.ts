import {Injectable} from "@angular/core";
import {Snap} from "../models/snap.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, Subscription, switchMap} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SnapService {


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
    this.httpClient.post<Snap>("http://localhost:3000/snaps", newSnap);

    this.lastId++;
  }

  deleteSnap(snapToDeleteId: number): Subscription {
    return this.httpClient.delete("http://localhost:3000/snaps/" + snapToDeleteId).subscribe();
  }
}

