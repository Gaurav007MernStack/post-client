import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from './shared/toast/toast.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonFileModule } from './modules/commonModule/common-module';
import { AuthguardServiceService } from './service/authguard-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './modules/commonModule/components/header/header.component';
import { AppStateModule } from './app-state/app-state.module';
import { HttpClientInterceptor } from './interceptors/http-client.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    MatChipsModule,
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    CommonFileModule,
    AppStateModule,
    HttpClientModule



  ],
  providers: [ToastComponent,MatSnackBar,AuthguardServiceService,    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpClientInterceptor,
    multi: true
  },
], bootstrap: [AppComponent],
exports:[SidemenuComponent,HeaderComponent]
})
export class AppModule { }
