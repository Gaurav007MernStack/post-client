import { HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserserviceService } from 'src/app/service/user-service/userservice.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  public AddEmployeeForm: FormGroup;
  submitted: boolean = false;
  Employee: any;

  constructor(private UserserviceService: UserserviceService,
    public dialogRef: MatDialogRef<AddPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,


  ) {

    // customerName: new FormControl({ value: this.dealerPayoutDetails.customerName, disabled: true }),

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${"4583457834657834653478"}` // Assuming it's a Bearer token
    });

    const requestOptions = {
      headers: headers
    };



    this.AddEmployeeForm = new FormGroup({

      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),

    });
  }
  OnSubmit() {
    this.submitted = true;
    let newData = localStorage.getItem("userDetails")
    let userId;
    if (newData) {
      let d = JSON.parse(newData)
      userId = d?.data?._id;
    }

    if (this.AddEmployeeForm.valid) {

      if (this.data.value == 'add') {
        this.UserserviceService.AddEmployee({
          title: this.AddEmployeeForm.value.title,
          content: this.AddEmployeeForm.value.content,
          authorInformation: userId
        }).subscribe((el: any) => {

          this.UserserviceService.toast.snackbarSucces(el.error);


          this.dialogRef.close(el);
          this.UserserviceService.toast.snackbarSucces("Added Successfully!");

        })
      }
      else {
        this.UserserviceService.UpdateEmployee({
          title: this.AddEmployeeForm.value.title,
          content: this.AddEmployeeForm.value.content,
          item: this.Employee._id
          // _id: this.AddEmployeeForm.value._id
        }).subscribe((el: any) => {
          this.dialogRef.close(el);
          this.UserserviceService.toast.snackbarSucces("Updated Successfully!");

        })

      }
    }
  }

  ngOnInit(): void {

    if (this.data?.value == 'edit') {
      this.UserserviceService.Get(this.data).subscribe((val: any) => {
    

        this.Employee = val?.data
        this.AddEmployeeForm = new FormGroup({
          title: new FormControl(this.Employee.title, [Validators.required]),
          content: new FormControl(this.Employee.content, [Validators.required])
        });


      })

    }

  }

}
