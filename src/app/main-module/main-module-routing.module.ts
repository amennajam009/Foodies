import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home/home.component';
import { MainModuleComponent } from './main-module.component';
import { ShopComponent } from './shop/shop/shop.component';
import { AboutUsComponent } from './About-Us/about-us/about-us.component';
import { ContactComponent } from './contact/contact/contact.component';
import { ReviewComponent } from './Review/review/review.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { BookingComponent } from './booking/booking/booking.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [{ path: '', component: MainModuleComponent ,
children:[
  // {path:'' , component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'shop' , component:ShopComponent},
  {path:'About-us', component:AboutUsComponent},
  {path:'contact' , component:ContactComponent},
  {path:'Review' , component:ReviewComponent},
  {path:'ViewCart',component:ViewCartComponent},
  {path:'booking' , component:BookingComponent},
  {path:'confirm' , component:ConfirmationComponent}

]



}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
