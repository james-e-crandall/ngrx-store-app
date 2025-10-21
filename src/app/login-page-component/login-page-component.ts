import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { loginUser } from '../state/login-page.actions';
import { Login } from '../Login';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page-component',
  imports: [FormsModule],
  templateUrl: './login-page-component.html',
  styleUrl: './login-page-component.css'
})
export class LoginPageComponent {
  login: Login;

  constructor(private store: Store<{ login: Login }>) {
    this.login = { username: '', password: '' };

  }

  onSubmit(username: string, password: string) {
    this.store.dispatch(loginUser({ login: this.login }));
  }

}
