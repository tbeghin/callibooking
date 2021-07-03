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
import {Piece} from '../models';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PieceService {
  private static collection: string;
  private dbCollection: AngularFirestoreCollection<Piece>;

  constructor(private readonly db: AngularFirestore) {
    PieceService.collection = 'pieces';
    this.dbCollection = this.db.collection<Piece>(`${PieceService.collection}`);
  }

  getNewId(): string {
    return this.dbCollection.ref.doc().id;
  }

  getById(pieceId: string): Observable<Piece> {
    return this.dbCollection.doc(pieceId).get().pipe(
      map((changes: DocumentSnapshot<Piece>) => ({id: changes.id, ...changes.data()}) as Piece),
      trace('getPieceById'),
    );
  }

  getAll(): Observable<Piece[]> {
    return this.dbCollection.snapshotChanges().pipe(
      map((changes: DocumentChangeAction<Piece>[]) =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )),
      trace('getPieces'),
    );
  }

  savePiece(piece: Piece): Observable<DocumentReference<Piece>> {
    if (!!piece.id) {
      return from(this.dbCollection.doc(piece.id).update({...piece})).pipe(
        map(() => this.dbCollection.doc(piece.id).ref),
        trace('updatePiece')
      );
    } else {
      return from(this.dbCollection.add({...piece})).pipe(
        trace('savePiece')
      );
    }
  }
}
