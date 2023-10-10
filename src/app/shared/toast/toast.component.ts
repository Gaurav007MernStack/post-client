import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent  {

 
  constructor(public snackBar: MatSnackBar) {}

  private configSucces: MatSnackBarConfig = {
    panelClass: ['style-succes'], 
    duration : 5000   
  };

  private configError: MatSnackBarConfig = {
    panelClass: ['style-error'],
    duration : 5000
  };

  public snackbarSucces(message:string) {
    this.snackBar.open(message, 'close', this.configSucces);
  }

  public snackbarError(message:string) {
    this.snackBar.open(message, 'close', this.configError);
  }



}
