import { MatExpansionModule } from '@angular/material/expansion';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchPipe } from 'src/app/search.pipe';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    DashboardComponent,
    SearchPipe,
    AddEmployeeComponent
  ],
  imports: [
    MatPaginatorModule,
    MatTableModule,
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatExpansionModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,


  ]
})
export class DashboardModule { }
