import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  exhaustMap,
  filter,
  map,
  mapTo,
  switchMap,
  takeUntil,
} from 'rxjs/operators';

import {User} from '../../models';
import {AuthenticationService} from '../../services/authentication.service';
import {authenticationActions, routerActions} from '../actions';

@Injectable()
export class AuthenticationEffects {
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authenticationActions.signIn),
      switchMap(() => this.authenticationService.signIn()),
      switchMap(() => this.authenticationService.saveUserInformation()),
      map(user =>
        !!user ? authenticationActions.signInFulfilled({user}) : routerActions.routerGo({path: ['error']})),
    ),
  );

  signInFulfilled$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authenticationActions.signInFulfilled),
      switchMap(() => this.authenticationService.getCurrentUser()),
      switchMap((user: User) => this.authenticationService.getUser(user.uid)),
      map((user: User) => user.admin ? routerActions.routerGo({path: ['spectacle']}) : routerActions.routerGo({path: ['spectacle']})),
    ),
  );

  signOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authenticationActions.signOut),
      switchMap(() => this.authenticationService.signOut()),
      switchMap(() => [authenticationActions.signOutFulfilled(), routerActions.routerGo({path: ['formulaire']})]),
    ),
  );

  checkAutoSignIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authenticationActions.checkAutoSignIn),
      exhaustMap(() =>
        this.authenticationService.getCurrentUser().pipe(
          takeUntil(this.signIn$),
          filter(user => !!user),
          switchMap((user: User) => this.authenticationService.getUser(user.uid)),
          map(user => authenticationActions.signInFulfilled({user})),
        ),
      ),
    ),
  );

  signOutFulfilled$ = createEffect(() =>
      this.actions$.pipe(
        ofType(authenticationActions.signOutFulfilled),
        mapTo(true),
      ),
    {dispatch: false},
  );

  constructor(private actions$: Actions, private readonly authenticationService: AuthenticationService) {
  }
}
