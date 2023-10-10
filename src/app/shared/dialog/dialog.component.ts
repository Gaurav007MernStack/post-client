import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'
]
})
export class DialogComponent  {

  constructor(
    public dialog: MatDialog,
  ) { }

  
  openDialog(dialogTitle: string, dialogContent : string,width:string = '50%',minHeight:string="150") {
    const dialogRef = this.dialog.open(DialogDataDialog, {
     width: width,
     minHeight:minHeight,
     height:minHeight,
     disableClose: true,
     data: {title: dialogTitle, content : dialogContent}
   });
    return new Promise((resolve, reject) => {
       dialogRef.afterClosed().subscribe((result:object) => {
          resolve(result);
          
       });
     });
 }

}


@Component({
  selector: 'dialog-data-dialog',
  templateUrl: 'dialog-data-dialog.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogDataDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}