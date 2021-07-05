import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentChangeAction} from '@angular/fire/firestore';
import {trace} from '@angular/fire/performance';
import firebase from 'firebase';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {ShowRequest} from '../models';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  private static collection: string;
  private dbCollection: AngularFirestoreCollection<ShowRequest>;

  constructor(
    private readonly db: AngularFirestore,
  ) {
    ShowService.collection = 'shows';
    this.dbCollection = this.db.collection<ShowRequest>(`${ShowService.collection}`);
  }

  getNewId(): string {
    return this.dbCollection.ref.doc().id;
  }

  getAll(): Observable<ShowRequest[]> {
    return this.dbCollection.snapshotChanges().pipe(
      map((changes: DocumentChangeAction<ShowRequest>[]) =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )),
      trace('getShows'),
    );
  }

  getById(showId: string): Observable<ShowRequest> {
    return this.dbCollection.doc(showId).get().pipe(
      map((changes: DocumentSnapshot<ShowRequest>) => ({id: changes.id, ...changes.data()}) as ShowRequest),
      trace('getPieceById'),
    );
  }

  saveShow(show: ShowRequest): Observable<ShowRequest> {
    if (!!show.id) {
      return from(this.dbCollection.doc(show.id).update({...show})).pipe(
        trace('updateShow'),
        map(() => show)
      );
    } else {
      return from(this.dbCollection.add({...show})).pipe(
        trace('saveShow'),
        map(() => show)
      );
    }
  }

  deleteShow(id: string): Observable<void> {
    return from(this.dbCollection.doc(id).delete()).pipe(
      trace('delete show'),
    );
  }
}
