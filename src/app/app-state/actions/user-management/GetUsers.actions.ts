import { createAction, props } from '@ngrx/store';

 
export const GetUsers = createAction(
  '[GET_USERS] Get GetUsers',
  props<any>()
);

export const GetUsersSuccess = createAction(
'[GET_USERS] Get GetUsers Success',
  props<any>()
);

export const GetUsersFailure = createAction(
'[GET_USERS] Get GetUsers Failure',
  props<any>()
);


