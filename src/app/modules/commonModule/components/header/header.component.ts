import { Component } from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router:Router){}
  Logout(){
    localStorage.removeItem('userDetails')
    this.router.navigate(['/login']);

  }

}
