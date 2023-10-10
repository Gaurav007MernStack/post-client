import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/app-state/actions';
import * as fromRoot from 'src/app/app-state';
import { Subject, takeUntil } from 'rxjs';
import { SearchPipe } from 'src/app/search.pipe';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { UserserviceService } from 'src/app/service/user-service/userservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  searchText: string = '';

  destroy$: Subject<boolean> = new Subject<boolean>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  pageSize = 5;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  displayedColumns: string[] = [
    'sno',
    'name',
    'email',
    'action'
  ];
  dataSource = new MatTableDataSource<any>([]);
  all: any;
  idData: any;
  constructor(private readonly store: Store, private router: Router,
    private dialog: MatDialog,
    private Userser: UserserviceService) {



    this.getemployee()


  }


  getemployee() {
    this.store.dispatch(
      actions.GetUsers({}))
    this.store
      .select(fromRoot.selectStatesGetUsersData)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        let userData = localStorage.getItem('userDetails')
        let newData;
        if (userData) {
          newData = JSON.parse(userData)
        }
        this.all = data
        this.dataSource.data = data?.data
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      })
  }
  Logout() {
    localStorage.removeItem('userDetails')
    this.router.navigate(['/login']);
  }
  applyFilter() {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }
  Delete(item: any) {
    this.Userser.Delete(item._id).subscribe((val: any) => {
      this.Userser.toast.snackbarSucces("User Deleted Successfully!");

      this.getemployee()

    })
  }



  AddEdit(value: string, item: any) {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: '400px',
      data: { value, item },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.getemployee()


      }
    });
  }
}



