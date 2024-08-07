import { LocalStorageService } from './../../../shared/service/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators ,FormControl,FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GeneralService } from 'src/app/shared/service/general.service';
import { MenuService } from 'src/app/shared/service/menu.service';
import { WhatsappService } from 'src/app/shared/service/whatsapp.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  data: any=[];
  LunchCards:any=[];
  StarterCards:any=[];
  BreakfastCards:any=[];
  PopularFoodCards:any=[];
  MakeMyIdPublic:any;
  cartItems: any[] = [];
  Url='http://localhost:4040/';


  constructor(private _menuService:MenuService,
              private _General:GeneralService,
              private Toaster:ToastrService,
             ) { 
  }

  ngOnInit(): void { 
  this.GetFoodCardApi();
  this.GetBreakFastApi();
  this.GetLunchFoodApi();
  this.GetPopularFoodAPI();
  }



//Get Food Card
 GetFoodCardApi(){
  this._menuService.GetAllDataStarterFoodCardApi().subscribe((res:any)=>{
    this.StarterCards=res.Result;
  })
}

//Get BreakFast Food
GetBreakFastApi(){
  this._menuService.GetAllDataOfBreakfastFoodApi().subscribe((res:any)=>{
    this.BreakfastCards=res.Result;
  })
}

//Get Lunch Food
GetLunchFoodApi(){
  this._menuService.GetAlldataOflunchApi().subscribe((res:any)=>{
    this.LunchCards=res.Result;
  })
}

//Get Popular Food
GetPopularFoodAPI(){
  this._menuService.GetpopularApi().subscribe((res:any)=>{
    this.PopularFoodCards=res.Result;
  })
}


// Add to Cart Function 
addToCartStarter(index:number) {
  const product = this.StarterCards[index] 
    this.Toaster.success('Item Is Added To Cart 🛒');
    const cartItems = localStorage.getItem('cartItems') ?? '';
    const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
    parsedCartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
    // This will Update My cart Item Counting
    this._General.updateCartItemsCount(parsedCartItems.length);
    // Calculate the total price
    let totalPrice = parseFloat(localStorage.getItem('totalPrice') ?? '0');
    totalPrice += parseFloat(product.Price);
    // Store the total price in localStorage
    localStorage.setItem('totalPrice', totalPrice.toString());
}


addToCartBreakfast(index:number) {
  const product = this.BreakfastCards[index]
    this.Toaster.success('Item Is Added To Cart 🛒');
    const cartItems = localStorage.getItem('cartItems') ?? '';
    const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
    parsedCartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
    // This will Update My cart Item Counting
    this._General.updateCartItemsCount(parsedCartItems.length);
    // Calculate the total price
    let totalPrice = parseFloat(localStorage.getItem('totalPrice') ?? '0');
    totalPrice += parseFloat(product.Price);
    // Store the total price in localStorage
    localStorage.setItem('totalPrice', totalPrice.toString());
}


addToCartLunch(index:number) {
  const product = this.LunchCards[index]
    this.Toaster.success('Item Is Added To Cart 🛒');
    const cartItems = localStorage.getItem('cartItems') ?? '';
    const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
    parsedCartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
    // This will Update My cart Item Counting
    this._General.updateCartItemsCount(parsedCartItems.length);
    // Calculate the total price
    let totalPrice = parseFloat(localStorage.getItem('totalPrice') ?? '0');
    totalPrice += parseFloat(product.Price);
    // Store the total price in localStorage
    localStorage.setItem('totalPrice', totalPrice.toString());
}


addToCartDrinks(index:number){
  const product = this.PopularFoodCards[index]
    this.Toaster.success('Item Is Added To Cart 🛒');
    const cartItems = localStorage.getItem('cartItems') ?? '';
    const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
    parsedCartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
    // This will Update My cart Item Counting
    this._General.updateCartItemsCount(parsedCartItems.length);
    // Calculate the total price
    let totalPrice = parseFloat(localStorage.getItem('totalPrice') ?? '0');
    totalPrice += parseFloat(product.Price);
    // Store the total price in localStorage
    localStorage.setItem('totalPrice', totalPrice.toString());
}



}
