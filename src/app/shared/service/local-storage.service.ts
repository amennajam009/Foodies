import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
    const storedCount = localStorage.getItem('cartItemsCount');
    const initialCount = storedCount ? parseInt(storedCount) : 0;
    this.cartItemsCountSubject = new BehaviorSubject<number>(initialCount);
    this.cartItemsCount$ = this.cartItemsCountSubject.asObservable();
   }

  private cartItemsCountSubject = new BehaviorSubject<number>(0);
  cartItemsCount$ = this.cartItemsCountSubject.asObservable();

  updateCartItemsCount(count: number) {
    this.cartItemsCountSubject.next(count);
    localStorage.setItem('cartItemsCount', count.toString());
  }


  //get Cart Items
  getCartItems(){
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
  }

  //get Total Price
  getTotalPrice(){
    const storedTotalPrice = localStorage.getItem('totalPrice');
    return storedTotalPrice ? parseFloat(storedTotalPrice) : 0;
  }

  //set Total Price
  setTotalPrice(totalPrice: number): void {
    localStorage.setItem('totalPrice', totalPrice.toString());
  }
  
}
