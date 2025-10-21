import { createReducer, on } from '@ngrx/store';
import { loadBook} from './books.actions.js';

export const initialState = 1;

export const bookReducer = createReducer(
  initialState,
  on(loadBook, (state, { id }) => id),
);

// on(AuthApiActions.loginSuccess, (state, { user }) => ({ ...state, user }))
// Referencing the action in an effect: