import { createReducer, on } from '@ngrx/store';
import * as LoginActions from './login-page.actions';

export interface State {
  username: string;
  password: string;
}

export const initialState: State = {
  username: '',
  password: '',
};


export const loginPageReducer = createReducer(
  initialState,
  on(LoginActions.loginUser, (state, { login }) => ({ username: login.username, password: login.password }))
);
