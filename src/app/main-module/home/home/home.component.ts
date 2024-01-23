import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/shared/service/contact.service';
import { GeneralService } from 'src/app/shared/service/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any=[];
  AllFourCards:any=[];
  Url='http://localhost:4040/';
  HeroImage:any=[];
  TwoCards:any=[];
  GetFreq:any=[]
  ThreehomeImage:any=[];
  cartItems: any[] = [];
  MakeMyIdPublic:any
  constructor(private _General:GeneralService,private Toaster:ToastrService) { }

  ngOnInit(): void {
   this.GetThreeHomeCardApi();
   this.GetFourCards()
   this.GetTwoImages()
   this.GetFrequentlyQuestions()
  }



// Get Three Cards
  GetThreeHomeCardApi(){
    this._General.ThreeHomeCardGetAllDataApi().subscribe((res:any)=>{
      this.ThreehomeImage = res.Result;
    })
  }

// Get Four Cards
 GetFourCards(){
  this._General.GetFourCardApi().subscribe((res:any)=>{
    this.AllFourCards = res.Result; 
    console.log('allfourcardss',this.AllFourCards)
  });
 }

 //Get Two Images
 GetTwoImages(){
  this._General.GetTwoImage().subscribe((res:any)=>{
    this.TwoCards=res.Result;
  });
 }

 //Get Freq Questions
 GetFrequentlyQuestions(){
  this._General.GetFrequentlyAskedQue().subscribe((res:any)=>{
    this.GetFreq = res.Result;
  })
 }


  addToCartFourcard(index: number) {
    const product = this.AllFourCards[index];
    this.Toaster.success('Item Is Added To Cart 🛒');
      const cartItems = localStorage.getItem('cartItems') ?? '';
      const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
      parsedCartItems.push(product);
      localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
      this._General.updateCartItemsCount(parsedCartItems.length);
      let totalPrice = parseFloat(localStorage.getItem('totalPrice') ?? '0');
      totalPrice += parseFloat(product.Price);
      localStorage.setItem('totalPrice', totalPrice.toString()); 
  }
  
  addToCart(index:number) {
     const product = this.ThreehomeImage[index]
      this.Toaster.success('Item Is Added To Cart 🛒');
      const cartItems = localStorage.getItem('cartItems') ?? '';
      const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
      parsedCartItems.push(product);
      localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
      this._General.updateCartItemsCount(parsedCartItems.length);
      // Calculate the total price
      let totalPrice = 0;
      parsedCartItems.forEach((data: any) => {
        totalPrice += parseFloat(data.Price);
      });
      // Store the total price in localStorage
      localStorage.setItem('totalPrice', totalPrice.toString());
  }
  



}
