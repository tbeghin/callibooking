import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {Store} from '@ngrx/store';
import {FirestoreDatePipe} from '../../pipes/firestore-date.pipe';

import {MaterialModule} from '../../shared/material.module';
import {pieceActions, showActions, theaterActions} from '../../store/actions';
import {ShowState} from '../../store/reducers';
import {ShowFormComponent} from './show-form/show-form.component';
import {ShowListComponent} from './show-list/show-list.component';
import {ShowRoutingModule} from './show-routing.module';


@NgModule({
  declarations: [
    ShowListComponent,
    ShowFormComponent,
    FirestoreDatePipe
  ],
  imports: [
    CommonModule,
    ShowRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
})
export class ShowModule {
  constructor(private readonly showStore: Store<ShowState>) {
    this.showStore.dispatch(showActions.getShows());
    this.showStore.dispatch(pieceActions.getPieces());
    this.showStore.dispatch(theaterActions.getTheaters());
  }
}
