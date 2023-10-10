import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { DialogComponent, DialogDataDialog } from './dialog/dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    ToastComponent,
    DialogDataDialog,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers:[
    ToastComponent,
    DialogDataDialog,
    DialogComponent
  ]
})
export class SharedModule { }
