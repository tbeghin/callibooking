import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {Theater} from '../../models';
import {TheaterService} from '../../services/theater.service';
import {theaterActions, showActions} from '../actions';

@Injectable()
export class TheaterEffects {
  getTheaters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(theaterActions.getTheaters),
      switchMap(() => this.theaterService.getAll()),
      map((theaters: Theater[]) => theaterActions.updateTheater({theaters})),
    ),
  );

  saveTheater$ = createEffect(() =>
    this.actions$.pipe(
      ofType(theaterActions.saveTheater),
      switchMap(({theater}) => this.theaterService.saveTheater(theater)),
      map(() => showActions.saveShowSuccess()),
    ),
  );

  constructor(private actions$: Actions, private readonly theaterService: TheaterService) {
  }
}
