import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {routerActions} from '../actions';

@Injectable()
export class RouterEffects {
  navigate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(routerActions.routerGo),
      tap(({ path, queryParams, extras }) => of(this.router.navigate(path, { queryParams, ...extras })))
    ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {
  }
}
