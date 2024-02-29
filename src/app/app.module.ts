import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorInterceptor } from './Guards/auth-interceptor.interceptor';
import { AdminModuleRoutingModule } from './admin-module/admin-module-routing.module';



@NgModule({
  declarations: [
    AppComponent
   
  ],

  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AdminModuleRoutingModule
  ],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AuthInterceptorInterceptor,
  //     multi: true,
  //   },
  // ],

  bootstrap: [AppComponent],
 
})
export class AppModule { }
