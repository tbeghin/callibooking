import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Piece} from '../../models';
import {pieceAdapter, showFeatureKey, ShowState} from '../reducers';

const showState = createFeatureSelector<ShowState>(showFeatureKey);
const pieceAdaptSelectors = pieceAdapter.getSelectors();

const piecesStateSelect = createSelector(showState, (state: ShowState) => state.pieces);

const allPieces = createSelector(piecesStateSelect, pieceAdaptSelectors.selectAll);

const pieceById = ({pieceId}: { pieceId: string }) =>
  createSelector(allPieces,
    (pieces: Piece[]) => {
      if (pieces) {
        return pieces.find(item => item.id === pieceId);
      } else {
        return {};
      }
    }
  );

export const pieceSelectors = {
  allPieces,
  pieceById
};
