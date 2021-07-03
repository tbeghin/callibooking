import {DocumentReference} from '@angular/fire/firestore';
import firebase from 'firebase';
import {Piece} from './piece';
import {Theater} from './theater';
import Timestamp = firebase.firestore.Timestamp;

export interface Show {
  id?: string;
  piece: Piece;
  date: Timestamp;
  theater: Theater;
}

export interface ShowRequest {
  id?: string;
  piece: DocumentReference<Piece>;
  date: Timestamp;
  theater: DocumentReference<Theater>;
}
