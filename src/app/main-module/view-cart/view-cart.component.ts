import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/shared/service/general.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';
declare var paypal: any; 
@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  threeCardsById: any =[];
  AllFourCards : any = []
  MakeMyIdPublic: any;
  Url = 'http://localhost:4040/';
  ThreeHomeCards: any ;
  selectedItemId: any;
  cartItems: any[] = [];
  quantity: number = 1;
  @ViewChild('paymentRef',{static: true}) paymentRef!:ElementRef;


  constructor(private _General:GeneralService,
              private localStorageService:LocalStorageService,
              private router: Router) {}
  totalPrice!: number;
  ngOnInit(): void {
    this.getCartItems();

    // Listen for changes in the localStorage
    window.addEventListener('storage', this.handleStorageChange.bind(this));
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: this.totalPrice,
                currency_code: 'USD',
                quantity: 7,
              },
            }
          ]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          console.log(details)
          if (details.status === 'COMPLETED') {
            localStorage.removeItem('cartItems')
            localStorage.removeItem('cartItemsCount')
            localStorage.removeItem('totalPrice')
            localStorage.removeItem('cartItemsCount')
            this.router.navigate(['/Main-module/confirm'])
          }
        });
      },
      onError: (error: any) => {
        console.log(error);
      }
    }).render(this.paymentRef.nativeElement)
  }


  getCartItems(){
    this.cartItems = this.localStorageService.getCartItems()
    this.totalPrice = this.localStorageService.getTotalPrice()
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

  increaseQuantity(_id: any): void {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      let parsedCartItems = JSON.parse(cartItems);
      const itemIndex = parsedCartItems.findIndex((item: any) => item._id === _id);
      if (itemIndex !== -1) {
        parsedCartItems[itemIndex].Price *= 2;
        localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
        this.cartItems = parsedCartItems;
        this.updateCart()
        this.quantity += 1;
      }
    }
  }

  decreaseQuantity(_id: any): void {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      let parsedCartItems = JSON.parse(cartItems);
      const itemIndex = parsedCartItems.findIndex((item: any) => item._id === _id);
      if (itemIndex !== -1) {
        // Decrease quantity and update total price
        if (parsedCartItems[itemIndex].Price > 1) {
          parsedCartItems[itemIndex].Price /= 2; // Halve the Price
          localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
  
          this.cartItems = parsedCartItems;
          this.updateCart()
          this.quantity -= 1;
        }
      }
    }
  }

 
  removeCartItemById(_id: any): void {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      let parsedCartItems = JSON.parse(cartItems);
      const itemIndex = parsedCartItems.findIndex((item: any) => item._id === _id);
      if (itemIndex !== -1) {
        parsedCartItems.splice(itemIndex, 1);
        localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
        this.cartItems = parsedCartItems;
        this.updateCart();
      }
    }
  }
  
  calculateTotalPrice(cartItems: any[]): number {
    let totalPrice = 0;
    for (let data of cartItems) {
      totalPrice += parseFloat(data.Price);
    }
    return totalPrice;
  }

   updateCart(){
    const itemCount = this.cartItems.length;
    this._General.updateCartItemsCount(itemCount);
    const totalPrice = this.calculateTotalPrice(this.cartItems);
    this.localStorageService.setTotalPrice(totalPrice);
    this.totalPrice = totalPrice;
  }
}
