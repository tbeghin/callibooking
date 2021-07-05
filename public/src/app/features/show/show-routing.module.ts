import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowListComponent} from './show-list/show-list.component';
import {ShowFormComponent} from './show-form/show-form.component';

const routes: Routes = [
  {
    path: '',
    component: ShowListComponent,
  },
  {
    path: 'create',
    component: ShowFormComponent,
  },
  {
    path: 'update/:showId',
    component: ShowFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowRoutingModule {
}
