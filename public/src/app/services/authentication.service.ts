import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {trace} from '@angular/fire/performance';
import firebase from 'firebase';
import {from, Observable} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';

import {User} from '../models';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(public auth: AngularFireAuth, private readonly db: AngularFirestore) {
  }

  signIn(): Observable<UserCredential> {
    return from(this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())).pipe(
      trace('signIn')
    );
  }

  getUser(userId: string): Observable<User> {
    return this.db.collection<User>(`users`).doc(userId).valueChanges().pipe(
      filter((user: User | undefined) => !!user),
      map((user: User | undefined) => user as User),
      trace('getUser')
    );
  }

  isAdmin(): Observable<boolean> {
    return this.getCurrentUser().pipe(
      switchMap(user => this.db.collection<User>(`admins`).doc(user.uid).get().pipe(
        map(snapshot => snapshot.exists),
        ),
      ),
      trace('isAdmin')
    );
  }

  getCurrentUser(): Observable<User> {
    return this.auth.user.pipe(
      filter((user: firebase.User | null) => !!user),
      map((user: firebase.User | null) => user as firebase.User),
      trace('getCurrentUser'),
      map(user => new User(user))
    );
  }

  saveUserInformation(): Observable<User> {
    return this.getCurrentUser().pipe(
      trace('saveUserInformation'),
      switchMap((user: User) =>
        from(this.db.doc(`users/${user.uid}`).set(Object.assign({}, user))).pipe(
          map(() => user)
        )
      )
    );
  }

  signOut(): Observable<void> {
    return from(this.auth.signOut()).pipe(
      trace('signOut')
    );
  }
}
