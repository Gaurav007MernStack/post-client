import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/user-service/userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  showPassword: boolean = false;
  loadingNext: boolean = false;

  public SignupForm:FormGroup;
  submitted:boolean=false;
  userdata: Object = {};
  userlist: any=[];

  constructor(private router :Router, private UserService:UserserviceService){
    if(localStorage.getItem('userlist')){

      let x :any=  localStorage.getItem('userlist');
      this.userlist = JSON.parse(x)
    }


    this.SignupForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),

    });
  }

  OnSubmit() {
      this.submitted =true
    if (this.SignupForm.valid) {
      this.loadingNext = true;

      this.UserService.register({
            email : this.SignupForm.value.email,
            username : this.SignupForm.value.username,
            password : this.SignupForm.value.password,


    }).subscribe((item:any)=>{
    })
      this.SignupForm.reset()
      this.router.navigate(['/'])
    }

  }



}
