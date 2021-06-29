import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireAuthGuard, redirectUnauthorizedTo,} from '@angular/fire/auth-guard';

import {LoginComponent} from './features/login/login.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'booking',
    canActivate: [AngularFireAuthGuard],
    loadChildren: () => import('./features/booking/booking.module').then((m) => m.BookingModule),
    data: {
      authGuardPipe: redirectUnauthorizedToLogin,
    },
  },
  {
    path: 'spectacle',
    canActivate: [AngularFireAuthGuard],
    loadChildren: () => import('./features/show/show.module').then((m) => m.ShowModule),
    data: {
      authGuardPipe: redirectUnauthorizedToLogin,
    },
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
