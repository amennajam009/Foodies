import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './Guards/admin.guard';
import { UserGuard } from './Guards/user.guard';

const routes: Routes = [
  { path: '', redirectTo: 'managment-module', pathMatch: 'full' },
// { path: '', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) }, 
{ path: 'Admin-module', canActivate:[AdminGuard],
loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule) }, 
{ path: 'Main-module', canActivate:[UserGuard],
 loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) }, 
{ path: 'managment-module', loadChildren: () => import('./managment-module/managment-module.module').then(m => m.ManagmentModuleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
