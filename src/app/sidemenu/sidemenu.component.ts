import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
  constructor(private router: Router,
  ){


  }
  selectedpage: string='';

  menuItems: any[] = [



        {
          "name": "Services",
          "url": "/services",
          "submenu": [
            {
              "name": "Messages",
              "url": "messages"
            },

          ]
        },
        {
          "name": "Products",
          "url": "/products",
          "submenu": [
            {
              "name": "Laptops",
              "url": "/products/laptops"
            },
            {
              "name": "Smartphones",
              "url": "/products/smartphones"
            },
            {
              "name": "Accessories",
              "url": "/products/accessories"
            }
          ]
        },
        {
          "name": "Contact",
          "url": "/contact"
        }



  ];

  toggleSubmenu(menuItem: any): void {
    if (menuItem.subMenuItems) {
      menuItem.expanded = !menuItem.expanded;
    }
  }
  navigate(url:string){
    this.router.navigate([url])
  }
}
