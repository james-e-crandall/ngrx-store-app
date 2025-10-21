import { createAction, createActionGroup, props } from '@ngrx/store';
import { Book } from '../book-list/book-model.js';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
  },
});

export const loadBook = createAction('[book Component] load', props<{ id: number }>());

