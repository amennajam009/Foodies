import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagmentModuleRoutingModule } from './managment-module-routing.module';
import { ManagmentModuleComponent } from './managment-module.component';
import { AdminManagmentComponent } from './admin-managment/admin-managment.component';
import { UserManagmentComponent } from './user-managment/user-managment.component';
import { AdminLoginComponent } from './admin-managment/admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-managment/admin-register/admin-register.component';
import { UserLoginComponent } from './user-managment/user-login/user-login.component';
import { UserRegisterComponent } from './user-managment/user-register/user-register.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManagmentModuleComponent,
    AdminManagmentComponent,
    UserManagmentComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    ManagmentModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManagmentModuleModule { }
