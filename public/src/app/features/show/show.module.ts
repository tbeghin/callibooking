import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {MaterialModule} from '../../shared/material.module';
import {ShowFormComponent} from './show-form/show-form.component';
import {ShowListComponent} from './show-list/show-list.component';
import {ShowRoutingModule} from './show-routing.module';


@NgModule({
  declarations: [ShowListComponent, ShowFormComponent],
  imports: [
    CommonModule,
    ShowRoutingModule,
    MaterialModule,
  ],
})
export class ShowModule {
}
