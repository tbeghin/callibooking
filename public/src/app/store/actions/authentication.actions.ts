import { createAction, props } from '@ngrx/store';
import { User } from '../../models';

const signIn = createAction('[Authentication] Authentification');

const signInFulfilled = createAction('[Authentication] Authentification réussi', props<{ user: User }>());
const signOut = createAction('[Authentication] Déconnexion');
const signOutFulfilled = createAction('[Authentication] Déconnexion réussi');
const checkAutoSignIn = createAction('[Authentication] Check auto sign-in');

export const authenticationActions = {
  signIn,
  signInFulfilled,
  signOut,
  signOutFulfilled,
  checkAutoSignIn
};
