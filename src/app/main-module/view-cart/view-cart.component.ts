import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/service/general.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  particualarproductofthreehomecards: any = {};
  MakeMyIdPublic: any;
  Url = 'http://localhost:7070/';
  ThreeHomeCards: any;
  selectedItemId: any;
  cartItems: any[] = [];

  constructor(private _General:GeneralService) {}
  totalPrice!: number;
  ngOnInit(): void {
    this.getCartItems();


    // Listen for changes in the localStorage
    window.addEventListener('storage', this.handleStorageChange.bind(this));
  }

  getCartItems(): void {
    const cartItems = localStorage.getItem('cartItems');
    this.cartItems = cartItems ? JSON.parse(cartItems) : [];
    const storedTotalPrice = localStorage.getItem('totalPrice');
    this.totalPrice = storedTotalPrice ? parseFloat(storedTotalPrice) : 0;
  }


  handleStorageChange(event: StorageEvent): void {
    if (event.key === 'cartItems') {
      const cartItems = event.newValue ? JSON.parse(event.newValue) : [];
      this.cartItems = cartItems;
    } else if (event.key === 'totalPrice') {
      const totalPrice = parseFloat(event.newValue ?? '0');
      this.totalPrice = totalPrice;
    }
  }



  GetThreeCardById(_id: any) {
    this.MakeMyIdPublic = _id;
    this._General.ThreehomecardsById(_id).subscribe((res: any) => {
      this.particualarproductofthreehomecards = res.Result;
    });
  }


}
