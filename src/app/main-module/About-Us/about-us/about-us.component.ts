import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/service/general.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  particualarproductofthreehomecards :any ={}
  MakeMyIdPublic:any;
  Url='http://localhost:7070/'
  ThreeHomeCards:any
  selectedItemId: any;
  cartItems: any=[];
  constructor(private _General:GeneralService) { }

  ngOnInit(): void {
    this.GetThreeCardHomeData()
    this.getCartItems()
  }


  getCartItems(): void {
    const cartItems = localStorage.getItem('cartItems');
    this.cartItems = cartItems ? JSON.parse(cartItems) : [];
  }
  public GetThreeCardHomeData(){
    this._General.ThreeHomeCardGetAllDataApi().subscribe((res:any)=>{
      this.ThreeHomeCards=res.Result;
    })
  }

  GetThreeCardById(_id:any){
    this.MakeMyIdPublic=_id;
    this._General.ThreehomecardsById(_id).subscribe((res:any)=>{
      this.particualarproductofthreehomecards=res.Result;
    })
  }

 
}
