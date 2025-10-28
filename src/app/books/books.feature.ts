import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Book } from '../books/book';

import * as BookListPageActions from './book-list-page.actions';

interface State {
  books: Book[];
  query: string;
}

const initialState: State = {
  books: [],
  query: '',
};

export const booksFeature = createFeature({
  name: 'books',
  reducer: createReducer(
    initialState,
    on(BookListPageActions.search, (state, action) => ({
      ...state,
      query: action.query,
    })),
  ),
  extraSelectors: ({ selectQuery, selectBooks }) => ({
    selectFilteredBooks: createSelector(
      selectQuery,
      selectBooks,
      (query, books) => books.filter(book => book.volumeInfo.title.includes(query)),
    ),
  }),
});