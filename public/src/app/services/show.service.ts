import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {trace} from '@angular/fire/performance';
import {from, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {Show} from '../models';

@Injectable({
  providedIn: 'root',
})
export class ShowService {

  constructor(private readonly db: AngularFirestore) {
  }

  getShow(): Observable<Show[]> {
    return this.db.collection<Show>(`shows`).valueChanges().pipe(
      filter((shows: Show[]) => !!shows),
      map((shows: Show[]) => shows),
      trace('getShow'),
    );
  }

  saveShow(show: Show): Observable<void> {
    return from(this.db.doc(`shows/${show.id}`).set(Object.assign({}, show))).pipe(
      trace('saveShow'),
    );
  }
}
