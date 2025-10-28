import { createAction, props } from "@ngrx/store";
import { Book } from '../books/book';

export const loadBooksSuccess = createAction('[book Component] loadBooksSuccess', props<{ books: Book[] }>());