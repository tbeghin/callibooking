import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';

import {ShowRequest} from '../../models';
import {PieceService} from '../../services/piece.service';
import {ShowService} from '../../services/show.service';
import {TheaterService} from '../../services/theater.service';
import {routerActions, showActions} from '../actions';

@Injectable()
export class ShowEffects {
  getShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(showActions.getShows),
      switchMap(() => this.showService.getAll()),
      map((shows: ShowRequest[]) => showActions.updateShow({shows})),
    ),
  );

  saveShow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(showActions.saveShow),
      switchMap(({show}) => this.pieceService.savePiece(show.piece).pipe(map((pieceRef) => ({
        ...show,
        piece: pieceRef
      })))),
      switchMap((show) => this.theaterService.saveTheater(show.theater).pipe(map((theaterRef) => ({
        ...show,
        theater: theaterRef
      } as ShowRequest)))),
      switchMap((show: ShowRequest) => this.showService.saveShow(show)),
      map(() => showActions.saveShowSuccess()),
    ),
  );

  saveShowSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(showActions.saveShowSuccess),
      map(() => this.snackBar.open('Vos données ont été enregistrées', '', {duration: 5000})),
      map(() => routerActions.routerGo({path: ['spectacle']}))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly pieceService: PieceService,
    private readonly theaterService: TheaterService,
    private readonly showService: ShowService,
    private readonly snackBar: MatSnackBar,
  ) {
  }
}
