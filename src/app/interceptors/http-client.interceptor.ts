import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
   } from '@angular/common/http';
   import { Observable, throwError } from 'rxjs';
   import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastComponent } from '../shared/toast/toast.component';
import { MatDialog } from '@angular/material/dialog';
import { UserserviceService } from '../service/user-service/userservice.service';

@Injectable({
  providedIn: 'root'
})

export class HttpClientInterceptor implements HttpInterceptor {

  constructor(
    private router:Router,
    public dialog: MatDialog,
    private UserService:UserserviceService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(0),
      catchError((error: HttpErrorResponse |any) => {
        if(error && error.status==401){
          this.UserService.toast.snackbarSucces(error.error.error);
          window.localStorage.clear();
          setTimeout(() => {
            // window.location.reload();

          }, 1000);
          this.router.navigate(['/login']);
        }
        if(error && error.status==400 && ((error.url?.includes("submitsmrappointmentResidual") || (error.url?.includes("submitcancelappointmentbooking"))  || (error.url?.includes("submitsmrappointment"))))){

          if(error?.error?.errors && !(error.url?.includes("submitsmrappointment"))){
             this.UserService.toast.snackbarSucces(error.error.errors[0].errorMessage);




          }

          if(error.url?.includes("submitsmrappointmentResidual")){
   Object.values(error?.error?.errors)

          }

          if(error.url?.includes("submitsmrappointment")){
           Object.values(error?.error?.errors)



          }

        }


        return throwError(()=>{Error("api error")});
      })
    );
  }
}
