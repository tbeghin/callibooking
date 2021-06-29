import {createFeatureSelector, createSelector} from '@ngrx/store';
import {User} from '../../models';
import {authenticationFeatureKey, AuthenticationState} from '../reducers';

const selectState = createFeatureSelector<AuthenticationState>(authenticationFeatureKey);

const currentUser = createSelector(selectState, (state: AuthenticationState) => state.user);
const displayName = createSelector(selectState, currentUser, (state: AuthenticationState, user: User | null) => user?.displayName);
const isAdmin = createSelector(selectState, currentUser, (state: AuthenticationState, user: User | null) => user?.admin);

export const authenticationSelectors = {
  currentUser,
  displayName,
  isAdmin
};
