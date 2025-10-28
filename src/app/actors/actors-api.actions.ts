import { createAction, props } from "@ngrx/store";
import { Actor } from "./actor";

    export const actorsLoadedFailure = createAction('[actors Page] actorsLoadedFailure', props<{errorMsg : string}>());
    export const actorsLoadedSuccess = createAction('[actors Page] actorsLoadedSuccess', props<{actors : any}>());