import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagmentModuleComponent } from './managment-module.component';
import { AdminLoginComponent } from './admin-managment/admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-managment/admin-register/admin-register.component';
import { UserLoginComponent } from './user-managment/user-login/user-login.component';
import { UserRegisterComponent } from './user-managment/user-register/user-register.component';

const routes: Routes = [{ path: '', component: ManagmentModuleComponent,
children:[
  {path:'admin-login',component:AdminLoginComponent},
  {path:'admin-register',component:AdminRegisterComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-register',component:UserRegisterComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagmentModuleRoutingModule { }
