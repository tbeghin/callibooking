import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';
import {Piece, ShowRequest, Theater} from '../../models';
import {pieceActions, showActions, theaterActions} from '../actions';

export const showFeatureKey = 'show';

export type ShowEntityState = EntityState<ShowRequest>;
export type PieceEntityState = EntityState<Piece>;
export type TheaterEntityState = EntityState<Theater>;

export const showAdapter = createEntityAdapter<ShowRequest>();
export const pieceAdapter = createEntityAdapter<Piece>();
export const theaterAdapter = createEntityAdapter<Theater>();

export interface ShowState {
  shows: ShowEntityState;
  pieces: PieceEntityState;
  theaters: TheaterEntityState;
}

const initialState: ShowState = {
  shows: showAdapter.getInitialState(),
  pieces: pieceAdapter.getInitialState(),
  theaters: theaterAdapter.getInitialState(),
};

export const showReducers = createReducer(
  initialState,
  on(showActions.updateShow, (state, {shows}) => ({
      ...state,
      shows: showAdapter.setAll(shows, state.shows)
    })
  ),
  on(pieceActions.updatePiece, (state, {pieces}) => ({
      ...state,
      pieces: pieceAdapter.setAll(pieces, state.pieces)
    })
  ),
  on(theaterActions.updateTheater, (state, {theaters}) => ({
      ...state,
      theaters: theaterAdapter.setAll(theaters, state.theaters)
    })
  )
);
