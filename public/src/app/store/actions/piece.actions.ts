import {createAction, props} from '@ngrx/store';
import {Piece} from '../../models';

const getPieces = createAction('[Piece] Get Pieces');
const savePiece = createAction('[Piece] Save Piece', props<{ piece: Piece }>());

const updatePiece = createAction('[Piece] Update pieces in store', props<{ pieces: Piece[] }>());

export const pieceActions = {
  getPieces,
  savePiece,
  updatePiece,
};
