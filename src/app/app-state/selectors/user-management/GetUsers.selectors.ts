import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as reducer from '../../reducers/user-management/GetUsers.reducers'

const state = createFeatureSelector<reducer.State>('GetUsers');


export const selectLoadingGetUsers = createSelector(
  state,
  state => state.isLoading
);

export const selectStatesGetUsers= createSelector(
  state,
  state => state
);

export const selectStatesGetUsersBody= createSelector(
  state,
  state => state.body
);

export const selectStatesGetUsersData= createSelector(
  state,
  state => state.GetUsers
);
