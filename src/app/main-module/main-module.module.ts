import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './header/header/header.component';
import { ShopComponent } from './shop/shop/shop.component';
import { AboutUsComponent } from './About-Us/about-us/about-us.component';
import { ContactComponent } from './contact/contact/contact.component';
import { ReviewComponent } from './Review/review/review.component';
import { FooterComponent } from './footer/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { BookingComponent } from './booking/booking/booking.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    MainModuleComponent,
    HomeComponent,
    HeaderComponent,
    ShopComponent,
    AboutUsComponent,
    ContactComponent,
    ReviewComponent,
    FooterComponent,
    ViewCartComponent,
    BookingComponent,
    ConfirmationComponent,

  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
  ], 
})
export class MainModuleModule { }
