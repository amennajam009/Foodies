import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagmentModuleRoutingModule } from './managment-module-routing.module';
import { ManagmentModuleComponent } from './managment-module.component';


@NgModule({
  declarations: [
    ManagmentModuleComponent
  ],
  imports: [
    CommonModule,
    ManagmentModuleRoutingModule
  ]
})
export class ManagmentModuleModule { }
