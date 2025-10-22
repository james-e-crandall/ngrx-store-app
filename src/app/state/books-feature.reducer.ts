import { createFeature, createReducer, on } from '@ngrx/store';
import { Book } from '../book-list/book-model';

import * as BookListPageActions from './book-list-page.actions';
import * as BooksApiActions from './books-api.actions';

interface State {
  books: Book[];
  loading: boolean;
}

const initialState: State = {
  books: [],
  loading: false,
};

export const booksFeature = createFeature({
  name: 'books',
  reducer: createReducer(
    initialState,
    on(BookListPageActions.enter, (state) => ({
      ...state,
      loading: true,
    })),
    on(BooksApiActions.loadBooksSuccess, (state, { books }) => ({
      ...state,
      books,
      loading: false,
    }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectBooksState, // feature selector
  selectBooks, // selector for `books` property
  selectLoading, // selector for `loading` property
} = booksFeature;