import { createAction, props } from '@ngrx/store';
import { Login } from '../Login';

export const loginUser = createAction(
  '[Login Page] Login',
  props<{ login: Login }>()
);


