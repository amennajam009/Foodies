import { Component, OnInit } from '@angular/core';
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
  Url='http://localhost:7070/';
  HeroImage:any=[];
  TwoCards:any=[];
  GetFreq:any=[]
  ThreehomeImage:any=[];
  cartItems: any[] = [];
  MakeMyIdPublic:any
  particualarproductofthreehomecards:any={}
  constructor(private _General:GeneralService) { }

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


  addToCart(_id: any) {
    this.MakeMyIdPublic = _id;
    this._General.ThreehomecardsById(_id).subscribe((res: any) => {
      const product = res.Result;
      const cartItems = localStorage.getItem('cartItems') ?? '';
      const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
      parsedCartItems.push(product);
      localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
  
      // Update the cart items count using the CartService
      this._General.updateCartItemsCount(parsedCartItems.length);
    });
  }
}