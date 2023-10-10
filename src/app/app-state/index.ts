import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer
  } from '@ngrx/store';
  import { localStorageSync } from 'ngrx-store-localstorage';
  import * as GetUsersReducers from './reducers/user-management/GetUsers.reducers';
  import { environment } from '../../environments/environment';


  export interface State {

    GetUsers: GetUsersReducers.State;



  }

  export const reducers: ActionReducerMap<State> = {
    GetUsers : GetUsersReducers.reducer,


  };

  const reducerKeys = ['usernameToUserInformation'];
  export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({keys: reducerKeys})(reducer);
  }

  export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {

      return reducer(state, action);
    };
  }


  export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug, localStorageSyncReducer] : [localStorageSyncReducer];

  export * from './selectors/index';




