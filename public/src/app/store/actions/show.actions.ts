import {createAction, props} from '@ngrx/store';
import {Show, ShowRequest} from '../../models';

const getShows = createAction('[Show] Get Shows');
const saveShow = createAction('[Show] Save Show', props<{ show: Show }>());

const updateShow = createAction('[Show] Update shows in store', props<{ shows: ShowRequest[] }>());
const saveShowSuccess = createAction('[Show] Success of save show');

export const showActions = {
  getShows,
  saveShow,
  updateShow,
  saveShowSuccess
};
