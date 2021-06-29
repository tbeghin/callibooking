import {createReducer, on} from '@ngrx/store';

import {User} from '../../models';
import {authenticationActions} from '../actions';

export const authenticationFeatureKey = 'authentication';

export interface AuthenticationState {
  user: User | null;
}

const initialState: AuthenticationState = {
  user: null,
};

export const authenticationReducers = createReducer(
  initialState,
  on(authenticationActions.signInFulfilled, (state, {user}) => ({
    ...state,
    user,
  })),
);
