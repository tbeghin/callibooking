import {createAction, props} from '@ngrx/store';
import {Show} from '../../models';

const getShows = createAction('[Show] Get Shows');
const saveShow = createAction('[Show] Save Show', props<{ show: Show }>());

const updateShow = createAction('[Show] Update shows in store', props<{ shows: Show[] }>());
const saveShowSuccess = createAction('[Show] Success of save show');

export const showActions = {
  getShows,
  saveShow,
  updateShow,
  saveShowSuccess
};
