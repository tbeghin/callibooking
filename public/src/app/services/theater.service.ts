import {Injectable} from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction,
  DocumentReference
} from '@angular/fire/firestore';
import {trace} from '@angular/fire/performance';
import firebase from 'firebase';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Theater} from '../models';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

@Injectable({
  providedIn: 'root'
})
export class TheaterService {
  private static collection: string;
  private dbCollection: AngularFirestoreCollection<Theater>;

  constructor(private readonly db: AngularFirestore) {
    TheaterService.collection = 'theaters';
    this.dbCollection = this.db.collection<Theater>(`${TheaterService.collection}`);
  }

  getNewId(): string {
    return this.dbCollection.ref.doc().id;
  }

  getById(theaterId: string): Observable<Theater> {
    return this.dbCollection.doc(theaterId).get().pipe(
      map((changes: DocumentSnapshot<Theater>) => ({id: changes.id, ...changes.data()}) as Theater),
      trace('getTheatreById'),
    );
  }

  getAll(): Observable<Theater[]> {
    return this.dbCollection.snapshotChanges().pipe(
      map((changes: DocumentChangeAction<Theater>[]) =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )),
      trace('getTheaters'),
    );
  }

  saveTheater(theater: Theater): Observable<DocumentReference<Theater>> {
    if (!!theater.id) {
      return from(this.dbCollection.doc(theater.id).update({...theater})).pipe(
        map(() => this.dbCollection.doc(theater.id).ref),
        trace('updateTheater')
      );
    } else {
      return from(this.dbCollection.add({...theater})).pipe(
        trace('saveTheater')
      );
    }
  }
}
