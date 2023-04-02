import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { GeneralSettingComponent } from './general-setting/general-setting/general-setting.component';


@NgModule({
  declarations: [
    AdminModuleComponent,
    DashboardComponent,
    GeneralSettingComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ]
})
export class AdminModuleModule { }
