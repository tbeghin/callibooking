import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirebaseModule} from './shared/firebase.module';
import {NgrxModule} from './shared/ngrx.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FirebaseModule,
    NgrxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
