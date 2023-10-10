import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from '../service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSource = new Subject<string>();
  private messageSource1 = new Subject<string>();
  message$ = this.messageSource.asObservable();
  message1$ = this.messageSource1.asObservable();

  sendMessage(message: any) {
    this.messageSource.next(message);
  }
  sendMessage1(message1: any) {
    this.messageSource1.next(message1);
  }
  GetUsers(data:any){
    // return this.http.get<any>(`https://reqres.in/api/users`);
    }



}
