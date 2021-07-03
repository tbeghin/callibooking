import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {DefaultRouterStateSerializer, StoreRouterConnectingModule,} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {environment} from '../../environments/environment';
import {AuthenticationEffects, PieceEffects, RouterEffects, ShowEffects, TheaterEffects} from '../store/effects';
import {
  authenticationFeatureKey,
  authenticationReducers,
  routerReducers,
  showFeatureKey,
  showReducers
} from '../store/reducers';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(
      routerReducers,
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
        },
      }),
    StoreModule.forFeature(authenticationFeatureKey, authenticationReducers),
    StoreModule.forFeature(showFeatureKey, showReducers),
    StoreRouterConnectingModule.forRoot({serializer: DefaultRouterStateSerializer}),
    EffectsModule.forRoot([
      RouterEffects,
      AuthenticationEffects,
      ShowEffects,
      PieceEffects,
      TheaterEffects
    ]),
    StoreDevtoolsModule.instrument({
      name: 'Callibooking - @ngrx DevTools',
      logOnly: environment.production,
    }),
  ],
})
export class NgrxModule {
}
