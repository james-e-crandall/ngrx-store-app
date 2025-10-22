import { createAction, props } from "@ngrx/store";

export const enter = createAction('[book Component] enter', props<{ id: number }>());
export const search = createAction('[book Component] search', props<{ id: number, query: string }>());

