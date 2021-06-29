import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthenticationState} from 'src/app/store/reducers';
import {authenticationActions} from '../../store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private readonly store: Store<AuthenticationState>) { }

  public signIn(): void {
    this.store.dispatch(authenticationActions.signIn());
  }
}
