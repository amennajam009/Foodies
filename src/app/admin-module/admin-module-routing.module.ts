import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { GeneralSettingComponent } from './general-setting/general-setting/general-setting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FoodiesAnalyticsComponent } from './foodies-analytics/foodies-analytics/foodies-analytics.component';
import { MenuComponent } from './menu/menu/menu.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

const routes: Routes = [{ path: '', component: AdminModuleComponent,
children:[
  {path:'dashboard',component:DashboardComponent},
  {path:'general-setting',component:GeneralSettingComponent},
  {path:'Menu' , component:MenuComponent},
  {path:'foodies-analytics',component:FoodiesAnalyticsComponent},
  {path: 'detail_page/:id',component:DetailPageComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]


})
export class AdminModuleRoutingModule { }
