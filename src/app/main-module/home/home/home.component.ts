import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GeneralService } from 'src/app/shared/service/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 
  data: any=[];
  AllFourCards:any=[];
  // AnotherImageUrl: any = [];
  Url='https://foodies-backend.vercel.app';
  HeroImage:any=[];
  TwoCards:any=[];
  GetFreq:any=[]
  ThreehomeImage:any=[];
  cartItems: any[] = [];
  MakeMyIdPublic:any
  particualarproductofthreehomecards:any={}
  constructor(private _General:GeneralService,private Toaster:ToastrService) { }

  ngOnInit(): void {
   this.GetThreeHomeCardApi();
  
    this._General.GetFourCardApi().subscribe((res:any)=>{
      this.AllFourCards = res.Result;
      // this.HeroImage = res.Result; // Assign the received data to your component variable
      this._General.GetHeroImage().subscribe((res:any)=>{
        this.HeroImage = res.Result;  
     
      //  this._General.GetTwoImage().subscribe((res)=>{
      //   this.TwoCards=res.Result;
      //  }) 
      }) 
    });

    this._General.GetTwoImage().subscribe((res:any)=>{
      this.TwoCards=res.Result;
    });
    

    this._General.GetFrequentlyAskedQue().subscribe((res:any)=>{
      this.GetFreq = res.Result;
    })
    
  }

  public GetThreeHomeCardApi(){
    this._General.ThreeHomeCardGetAllDataApi().subscribe((res:any)=>{
      this.ThreehomeImage = res.Result;
    })
  }




  // addToCartFourcard(_id: any) {
  //   this.MakeMyIdPublic = _id; 
  //   this._General.GetFourcardsById(_id).subscribe((res: any) => {
  //     this.Toaster.success('Item Is Added To Cart 🛒')
  //     const product = res.Result;
  //     const cartItems = localStorage.getItem('cartItems') ?? '';
  //     const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
  //     parsedCartItems.push(product);
  //     localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
  //     //This will Update My cart Item Counting
  //     this._General.updateCartItemsCount(parsedCartItems.length);
  //     // Calculate the total price
  //     let totalPrice = 0;
  //     parsedCartItems.forEach((data: any) => {
  //       totalPrice += data.Price;
  //     });
  //     // Store the total price in localStorage
  //     localStorage.setItem('totalPrice', totalPrice.toString());
  //   });
  // }



  // addToCart(_id: any) {
  //   this.MakeMyIdPublic = _id; 
  //   this._General.ThreehomecardsById(_id).subscribe((res: any) => {
  //     this.Toaster.success('Item Is Added To Cart 🛒')
  //     const product = res.Result;
  //     const cartItems = localStorage.getItem('cartItems') ?? '';
  //     const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
  //     parsedCartItems.push(product);
  //     localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
  //     //This will Update My cart Item Counting
  //     this._General.updateCartItemsCount(parsedCartItems.length);
  //     // Calculate the total price
  //     let totalPrice = 0;
  //     parsedCartItems.forEach((data: any) => {
  //       totalPrice += data.Price;
  //     });
  //     // Store the total price in localStorage
  //     localStorage.setItem('totalPrice', totalPrice.toString());
  //   });
  // }




  addToCartFourcard(_id: any) {
    this.MakeMyIdPublic = _id; 
    this._General.GetFourcardsById(_id).subscribe((res: any) => {
      this.Toaster.success('Item Is Added To Cart 🛒');
      const product = res.Result;
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
    });
  }
  
  addToCart(_id: any) {
    this.MakeMyIdPublic = _id; 
    this._General.ThreehomecardsById(_id).subscribe((res: any) => {
      this.Toaster.success('Item Is Added To Cart 🛒');
      const product = res.Result;
      const cartItems = localStorage.getItem('cartItems') ?? '';
      const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
      parsedCartItems.push(product);
      localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
      // This will Update My cart Item Counting
      this._General.updateCartItemsCount(parsedCartItems.length);
      // Calculate the total price
      let totalPrice = 0;
      parsedCartItems.forEach((data: any) => {
        totalPrice += parseFloat(data.Price);
      });
      // Store the total price in localStorage
      localStorage.setItem('totalPrice', totalPrice.toString());
    });
  }
  

  
}