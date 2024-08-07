import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { GeneralSettingComponent } from './general-setting/general-setting/general-setting.component';
import { FoodiesAnalyticsComponent } from './foodies-analytics/foodies-analytics/foodies-analytics.component';
import { MenuComponent } from './menu/menu/menu.component';
import { DetailPageComponent } from './detail-page/detail-page.component';


@NgModule({
  declarations: [
    AdminModuleComponent,
    DashboardComponent,
    GeneralSettingComponent,
    FoodiesAnalyticsComponent,
    MenuComponent,
    DetailPageComponent
  ],
  imports: [
    AdminModuleRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[AdminModuleRoutingModule]
})
export class AdminModuleModule { }
