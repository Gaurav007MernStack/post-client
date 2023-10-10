import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/user-service/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showPassword: boolean = false;
  loadingNext: boolean = false;
  data: any = localStorage.getItem('userlist')

  public loginForm: FormGroup;
  submitted: boolean = false;
  userdata: Object = {};
  userlist: any;
  message: any;
  constructor(private router: Router, private UserService: UserserviceService) {
    this.userlist = JSON.parse(this.data)

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  OnSubmit() {
    this.message = ''
    this.submitted = true
    if (this.loginForm.valid) {
      this.loadingNext = true;

      this.UserService.login({
        username: this.loginForm.value.email, password: this.loginForm.value.password,


      }).subscribe((item: any) => {
        localStorage.setItem('userDetails', JSON.stringify(item))
        this.router.navigate(['/dashboard']);
      })

    }
  }

}
