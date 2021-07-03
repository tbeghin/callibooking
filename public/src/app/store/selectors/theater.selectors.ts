import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Theater} from '../../models';
import {theaterAdapter, showFeatureKey, ShowState} from '../reducers';

const showState = createFeatureSelector<ShowState>(showFeatureKey);
const theaterAdaptSelectors = theaterAdapter.getSelectors();

const theatersStateSelect = createSelector(showState, (state: ShowState) => state.theaters);

const allTheaters = createSelector(theatersStateSelect, theaterAdaptSelectors.selectAll);

const theaterById = ({theaterId}: { theaterId: string }) =>
  createSelector(allTheaters,
    (theaters: Theater[]) => {
      if (theaters) {
        return theaters.find(item => item.id === theaterId);
      } else {
        return {};
      }
    }
  );

export const theaterSelectors = {
  allTheaters,
  theaterById
};
