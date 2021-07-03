import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFirePerformanceModule, PerformanceMonitoringService} from '@angular/fire/performance';
import {AngularFireRemoteConfigModule, SETTINGS} from '@angular/fire/remote-config';

import {environment} from 'src/environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AngularFirePerformanceModule,
    AngularFireRemoteConfigModule,
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [
    PerformanceMonitoringService,
    {
      provide: SETTINGS,
      useFactory: () => ({minimumFetchIntervalMillis: 10_000, fetchTimeoutMillis: 60_000})
    }
  ]
})
export class FirebaseModule {
}
