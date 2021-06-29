import {NavigationExtras, Params} from '@angular/router';
import {createAction, props} from '@ngrx/store';

const routerGo = createAction(
  '[Router] Go',
  props<{ path: unknown[]; queryParams?: Params | null | undefined; extras?: NavigationExtras }>(),
);
const routerChange = createAction('[Router] Route Change', props<{ params: unknown; path: string }>());

export const routerActions = {
  routerChange,
  routerGo,
};
