import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {ConfirmModalComponent} from '../../modals/confirm-modal/confirm-modal.component';

import {ShowRequest} from '../../models';
import {PieceService} from '../../services/piece.service';
import {ShowService} from '../../services/show.service';
import {TheaterService} from '../../services/theater.service';
import {routerActions, showActions} from '../actions';
import {RouterState} from '../reducers';

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

  deleteShow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(showActions.deleteShow),
      switchMap(({showId}) => this.dialog.open(ConfirmModalComponent, {data: showId}).afterClosed()),
      switchMap((showId: string) => !!showId ? [showActions.confirmDeleteShow({showId})] : EMPTY)
    )
  );

  confirmDeleteShow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(showActions.confirmDeleteShow),
      switchMap(({showId}) => this.showService.deleteShow(showId)),
      map(() => this.snackBar.open('Spectacle supprimé', '', {duration: 5000})),
      map(() => routerActions.routerGo({path: ['spectacle']}))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly routerStore: Store<RouterState>,
    private readonly pieceService: PieceService,
    private readonly theaterService: TheaterService,
    private readonly showService: ShowService,
    private readonly snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
  }
}
