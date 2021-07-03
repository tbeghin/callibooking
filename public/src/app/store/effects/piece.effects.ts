import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {Piece} from '../../models';
import {PieceService} from '../../services/piece.service';
import {pieceActions, showActions} from '../actions';

@Injectable()
export class PieceEffects {
  getPieces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(pieceActions.getPieces),
      switchMap(() => this.pieceService.getAll()),
      map((pieces: Piece[]) => pieceActions.updatePiece({pieces})),
    ),
  );

  savePiece$ = createEffect(() =>
    this.actions$.pipe(
      ofType(pieceActions.savePiece),
      switchMap(({piece}) => this.pieceService.savePiece(piece)),
      map(() => showActions.saveShowSuccess()),
    ),
  );

  constructor(private actions$: Actions, private readonly pieceService: PieceService) {
  }
}
