import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';

import {Show} from '../../models';
import {ShowService} from '../../services/show.service';
import {showActions} from '../actions';

@Injectable()
export class ShowEffects {
  getShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(showActions.getShows),
      switchMap(() => this.showService.getShow()),
      map((shows: Show[]) => showActions.updateShow({shows})),
    ),
  );

  saveShow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(showActions.saveShow),
      switchMap(({show}) => this.showService.saveShow(show)),
      map(() => showActions.saveShowSuccess()),
    ),
  );

  saveShowSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(showActions.saveShowSuccess),
        map(() => this.snackBar.open('Vos données ont été enregistrées')),
      ),
    {dispatch: false},
  );

  constructor(
    private readonly actions$: Actions,
    private readonly showService: ShowService,
    private readonly snackBar: MatSnackBar,
  ) {
  }
}
