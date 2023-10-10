import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginguardGuard } from './guard/loginguard.guard';
import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginguardGuard],

    loadChildren: () =>
      import('./modules/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: '',
    canActivate: [AuthenticationGuard],

    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
