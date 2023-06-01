import { Component, OnInit,HostListener } from '@angular/core';
import { GeneralService } from 'src/app/shared/service/general.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isNavbarExpanded = false;
  constructor(private _General:GeneralService) { }
  MakeMyIdPublic: any;
  Url = 'http://localhost:7070/';
  ThreeHomeCards: any;
  selectedItemId: any;
  cartItemsCount: number = 0;
  ngOnInit(): void {
    this.GetThreeCardHomeData();
    this.getCartItemsCount();
  }

 
  toggleNavbar() {
    this.isNavbarExpanded = !this.isNavbarExpanded;
  }
  header_variable=false
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop> 100|| document.documentElement.scrollTop>100){
      this.header_variable=true
    }
    else{
      this.header_variable=false
    }
  }


  public GetThreeCardHomeData() {
    this._General.ThreeHomeCardGetAllDataApi().subscribe((res: any) => {
      this.ThreeHomeCards = res.Result;
    });
  }

  GetThreeCardById(_id: any) {
    this.MakeMyIdPublic = _id;
    this._General.ThreehomecardsById(_id).subscribe((res: any) => {
     res.Result;
    });
  }

  getCartItemsCount(): void {
    const cartItems = localStorage.getItem('cartItems');
    this.cartItemsCount = cartItems ? JSON.parse(cartItems).length : 0;
  }
}
