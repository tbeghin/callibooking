import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Piece, Show, ShowRequest, Theater} from '../../models';
import {showAdapter, showFeatureKey, ShowState} from '../reducers';
import {pieceSelectors} from './piece.selectors';
import {selectRouteParam} from './router.selectors';
import {theaterSelectors} from './theater.selectors';

const showState = createFeatureSelector<ShowState>(showFeatureKey);
const showAdaptSelectors = showAdapter.getSelectors();

const showsStateSelect = createSelector(showState, (state: ShowState) => state.shows);

const allShowWithRef = createSelector(showsStateSelect, showAdaptSelectors.selectAll);
const allShow = createSelector(allShowWithRef, pieceSelectors.allPieces, theaterSelectors.allTheaters,
  (showsRequest: ShowRequest[], pieces: Piece[], theaters: Theater[]) =>
    showsRequest.map((showRequest: ShowRequest) => {
        const theaterId: string = showRequest.theater.id;
        const pieceId: string = showRequest.piece.id;

        return {
          ...showRequest,
          theater: theaters.find(item => item.id === theaterId),
          piece: pieces.find(item => item.id === pieceId)
        } as Show;
      }
    ));

const showById = createSelector(
  allShow,
  selectRouteParam('showId'),
  (shows: Show[], currentShowId: string | undefined) => shows.find(show => show.id === currentShowId));

export const showSelectors = {
  allShowWithRef,
  allShow,
  showById
};
