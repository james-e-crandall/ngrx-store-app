import { createAction, props } from '@ngrx/store';
import { Actor } from './actor';

export const opened = createAction('[actors Page] opened', props<{actor : Actor}>());   



