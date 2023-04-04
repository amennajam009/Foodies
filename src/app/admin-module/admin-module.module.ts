import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
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
    AdminModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModuleModule { }
