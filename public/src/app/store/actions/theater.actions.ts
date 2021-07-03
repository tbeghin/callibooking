import {createAction, props} from '@ngrx/store';
import {Theater} from 'src/app/models/theater';

const getTheaters = createAction('[Theater] Get Theaters');
const saveTheater = createAction('[Theater] Save Theater', props<{ theater: Theater }>());

const updateTheater = createAction('[Theater] Update theaters in store', props<{ theaters: Theater[] }>());

export const theaterActions = {
  getTheaters,
  saveTheater,
  updateTheater,
};
