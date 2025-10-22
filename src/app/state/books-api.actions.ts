import { createAction, props } from "@ngrx/store";
import { Book } from '../book-list/book-model';

export const loadBooksSuccess = createAction('[book Component] loadBooksSuccess', props<{ books: Book[] }>());