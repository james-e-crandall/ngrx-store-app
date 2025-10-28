import { ActionReducer, MetaReducer } from "@ngrx/store";
import * as LoginActionTypes from '../LogActions/log-action-types';

export function clearState(reducer: ActionReducer<any>): ActionReducer<any> {
 return function (state, action) {
  if (action.type === LoginActionTypes.LOGOUT) {
    state = undefined;
  }
  return reducer(state, action);
 };
}

export const clearStateMetaReducers: MetaReducer<any>[] = [clearState];
