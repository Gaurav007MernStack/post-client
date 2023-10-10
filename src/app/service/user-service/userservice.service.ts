import { Injectable } from '@angular/core';
import { ApiService } from '../service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService extends ApiService {
  id: any;
  public baseUrl: string = 'https://project-data-34dm.onrender.com';
  // public baseUrl: string = 'http://localhost:3000';


  GetUsers(data: any) {
    let myData = localStorage.getItem("userDetails")


    let tokenData;
    if (myData) {
      tokenData = JSON.parse(myData)
    }
    const headers = {
      Authorization: `Bearer ${tokenData?.tokenGenerate}`
    };

    return this.http.get<any>(`${this.baseUrl}/post/getAll`, { headers });
  }
  register(user: any) {
    return this.http.post<any>(`${this.baseUrl}/api/signup`, user);
  }
  AddEmployee(user: any) {

    let data = localStorage.getItem("userDetails")

    let tokenData;
    if (data) {
      tokenData = JSON.parse(data)
    }

    const headers = {
      Authorization: `Bearer ${tokenData?.tokenGenerate}`
    };




    return this.http.post<any>(`${this.baseUrl}/post/add`, user, { headers });
  }
  login(user: any) {
    return this.http.post<any>(`${this.baseUrl}/api/login`, user);
  }
  getall(user: any) {
    return this.http.get<any>(`${this.baseUrl}/api/users`);
  }
  Delete(id: any) {

    let newdata = localStorage.getItem("userDetails")

    let tokenData;
    if (newdata) {
      tokenData = JSON.parse(newdata)
    }

    const headers = {
      Authorization: `Bearer ${tokenData?.tokenGenerate}`
    };
    return this.http.delete<any>(`${this.baseUrl}/post/delete/${id}`, { headers });
  }
  Get(data: any) {
    this.id = data.item

    let newdata = localStorage.getItem("userDetails")

    let tokenData;
    if (newdata) {
      tokenData = JSON.parse(newdata)
    }

    const headers = {
      Authorization: `Bearer ${tokenData?.tokenGenerate}`
    };

    return this.http.get<any>(`${this.baseUrl}/post/get/${data?.item}`, { headers });
  }

  UpdateEmployee(user: any) {
    this.id = user.item;

    let newdata = localStorage.getItem("userDetails")

    let tokenData;
    if (newdata) {
      tokenData = JSON.parse(newdata)
    }

    const headers = {
      Authorization: `Bearer ${tokenData?.tokenGenerate}`
    };

    return this.http.patch<any>(`${this.baseUrl}/post/update/${user?.item}`, user, { headers });
  }

}
