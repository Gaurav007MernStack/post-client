import { Action, createReducer, on } from '@ngrx/store';
import { GetUsers, GetUsersBody, GetUsersResponse } from '../../types';
import * as actions from '../../actions';

export interface State {
  GetUsers: GetUsersResponse;
  defaultPreferredWorkshop: GetUsers[];
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: string;
  body: GetUsersBody;
}

export const initialState: State = {
  GetUsers: {
    "myRequest": [
        {
            "id": '',
            "tenant_Id": 0,
            "tenant_Name": null,
            "tenantUID": {
                "iiD_Id": 0,
                "iiD_value": 0,
                "uiD_Id": 0,
                "uiD_value": 0
            },
            "display_Name": "",
            "login_Name": "",
            "password": null,
            "login_On": "",
            "is_Active": null,
            "owned_By": 0,
            "owned_By_Name": "",
            "created_By": 0,
            "created_By_Name": "",
            "created_On": "",
            "modified_By": 0,
            "modified_By_Name": null,
            "modified_On": "",
            "roles": [
                {
                    "roleId": 0,
                    "roleName": ""
                },
              
            ],
            "department": [
                {
                    "departmentId": 0,
                    "departmentName": ""
                }
            ],
            "isWorkFlow": null,
            "action": 0,
            "approvedBy": 0,
            "approvedOn": "",
            "workFlowStatus": 0,
            "masterId": 0,
            "approvedByName": "",
            "remark": null
        },
   
    
    ],
    "pendingRequests": [
      {
        "id": '',
        "tenant_Id": 0,
        "tenant_Name": null,
        "tenantUID": {
            "iiD_Id": 0,
            "iiD_value": 0,
            "uiD_Id": 0,
            "uiD_value": 0
        },
        "display_Name": "",
        "login_Name": "",
        "password": null,
        "login_On": "",
        "is_Active": null,
        "owned_By": 0,
        "owned_By_Name": "",
        "created_By": 0,
        "created_By_Name": "",
        "created_On": "",
        "modified_By": 0,
        "modified_By_Name": null,
        "modified_On": "",
        "roles": [
            {
                "roleId": 0,
                "roleName": ""
            },
          
        ],
        "department": [
            {
                "departmentId": 0,
                "departmentName": ""
            }
        ],
        "isWorkFlow": null,
        "action": 0,
        "approvedBy": 0,
        "approvedOn": "",
        "workFlowStatus": 0,
        "masterId": 0,
        "approvedByName": "",
        "remark": null
    },
    
    ],
    "approvedRequests": [
      {
        "id": '',
        "tenant_Id": 0,
        "tenant_Name": null,
        "tenantUID": {
            "iiD_Id": 0,
            "iiD_value": 0,
            "uiD_Id": 0,
            "uiD_value": 0
        },
        "display_Name": "",
        "login_Name": "",
        "password": null,
        "login_On": "",
        "is_Active": null,
        "owned_By": 0,
        "owned_By_Name": "",
        "created_By": 0,
        "created_By_Name": "",
        "created_On": "",
        "modified_By": 0,
        "modified_By_Name": null,
        "modified_On": "",
        "roles": [
            {
                "roleId": 0,
                "roleName": ""
            },
          
        ],
        "department": [
            {
                "departmentId": 0,
                "departmentName": ""
            }
        ],
        "isWorkFlow": null,
        "action": 0,
        "approvedBy": 0,
        "approvedOn": "",
        "workFlowStatus": 0,
        "masterId": 0,
        "approvedByName": "",
        "remark": null
    },

    ],
    "allUsers": null,
    "isWorkFlowEnabled": null
},
  defaultPreferredWorkshop:[],
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: '',
  body:{
  },
};

const funReducer = createReducer(
  initialState,
  on(actions.GetUsers, (state,action) => ({...state, isLoading: true})),
  on(actions.GetUsersSuccess, (state, result) => {
    return{
      ...state,
      defaultPreferredWorkshop: result.response,
      GetUsers: result.response,
      isLoading: false,
      isLoadingSuccess: true
    }}),
  on(actions.GetUsersFailure, (state, result) => ({
      ...state,
      GetUsers: result,
      isLoading: false,
      isLoadingSuccess: false,
      isLoadingFailure:result.error
  })),
);

export function reducer(state: State | undefined, action: Action): any {
  return funReducer(state, action);
}

