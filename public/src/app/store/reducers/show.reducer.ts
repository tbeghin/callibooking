import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';
import {Show} from '../../models';
import {showActions} from '../actions';

export const showFeatureKey = 'show';

export type ShowEntityState = EntityState<Show>;

export const showAdapter = createEntityAdapter<Show>();

export interface ShowState {
  shows: ShowEntityState;
}

const initialState: ShowState = {
  shows: showAdapter.getInitialState(),
};

export const showReducers = createReducer(
  initialState,
  on(showActions.updateShow, (state, {shows}) => ({
      ...state,
      shows: showAdapter.setAll(shows, state.shows)
    })
  )
);
