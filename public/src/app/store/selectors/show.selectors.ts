import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Show} from '../../models';
import {showAdapter, showFeatureKey, ShowState} from '../reducers';
import {selectRouteParam} from './router.selectors';

const showState = createFeatureSelector<ShowState>(showFeatureKey);
const showAdaptSelectors = showAdapter.getSelectors();

const showsStateSelect = createSelector(showState, (state: ShowState) => state.shows);

const allShow = createSelector(showsStateSelect, showAdaptSelectors.selectAll);
const showById = createSelector(
  allShow,
  selectRouteParam('showId'),
  (shows: Show[], currentShow: string | undefined) => shows.find(show => show.id === currentShow));

export const showSelectors = {
  allShow,
  showById
};
