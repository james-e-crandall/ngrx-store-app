import { createSelector } from '@ngrx/store';
import { booksFeature } from './books-feature.reducer';

export const selectBookListPageViewModel = createSelector(
  booksFeature.selectBooks,
  booksFeature.selectLoading,
  (books, loading) => ({ books, loading })
);