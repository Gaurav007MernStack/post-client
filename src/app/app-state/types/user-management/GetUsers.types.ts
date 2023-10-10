export interface GetUsers {
    dealerID: Number;
    userid: Number;
    fromDate: Number;
    todate: Number;
  }
  
  
  export interface GetUsersBody {
  
  }

  export interface GetUsersResponse {
    allUsers:any,
    isWorkFlowEnabled:null,
    myRequest: MyRequest[],
    approvedRequests: ApprovedRequest[],
    pendingRequests:PendingRequest[],
  }
  
  export interface ApprovedRequest {
    action:number,
    approvedBy:number,
    approvedByName:string,
    approvedOn:string,
    created_By:number,
    created_By_Name:string,
    created_On:string,
    department:Department[],
    display_Name:string,
    id:string,
    isWorkFlow:null,
    is_Active:null,
    login_Name:string,
    login_On:string,
    masterId:number,
    modified_By:number,
    modified_By_Name:any,
    modified_On:string,
    owned_By:number,
    owned_By_Name:string,
    password:any,
    remark:any,
    roles:Roles[],
    tenantUID:TenantUID,
    tenant_Id:number,
    tenant_Name:any,
    workFlowStatus:number,
  }

  export interface TenantUID{
    iiD_Id:number,
    iiD_value:number,
    uiD_Id:number,
    uiD_value:number,

  }
  export interface MyRequest {
    action:number,
    approvedBy:number,
    approvedByName:string,
    approvedOn:string,
    created_By:number,
    created_By_Name:string,
    created_On:string,
    department:Department[],
    display_Name:string,
    id: string,
    isWorkFlow:null,
    is_Active:null,
    login_Name:string,
    login_On:string,
    masterId:number,
    modified_By:number,
    modified_By_Name:any,
    modified_On:string,
    owned_By:number,
    owned_By_Name:string,
    password:any,
    remark:any,
    roles:Roles[],
    tenantUID:TenantUID,
    tenant_Id:number,
    tenant_Name:any,
    workFlowStatus:number,
    
  }
  export interface PendingRequest {
    action:number,
    approvedBy:number,
    approvedByName:string,
    approvedOn:string,
    created_By:number,
    created_By_Name:string,
    created_On:string,
    department:Department[],
    display_Name:string,
    id:string,
    isWorkFlow:null,
    is_Active:null,
    login_Name:string,
    login_On:string,
    masterId:number,
    modified_By:number,
    modified_By_Name:any,
    modified_On:string,
    owned_By:number,
    owned_By_Name:string,
    password:any,
    remark:any,
    roles:Roles[],
    tenantUID:TenantUID,
    tenant_Id:number,
    tenant_Name:any,
    workFlowStatus:number,

    
  }
  export interface Roles {
    roleId:number,
    roleName:string,
    
  }
  export interface Department {
    departmentId:number,
    departmentName:string,
    
  }