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
    this.paypalPaymentGateway()
        // Listen for changes in the localStorage
    window.addEventListener('storage', this.handleStorageChange.bind(this));
  }


  // get Cart Items
  getCartItems(){
  this.cartItems = this.localStorageService.getCartItems()
  this.totalPrice = this.localStorageService.getTotalPrice()
  }
  

  //paypal Payment Gateway
  paypalPaymentGateway(){
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

  
  handleStorageChange(event: StorageEvent): void {
    if (event.key === 'cartItems') {
      const cartItems = event.newValue ? JSON.parse(event.newValue) : [];
      this.cartItems = cartItems;
    } else if (event.key === 'totalPrice') {
      const totalPrice = parseFloat(event.newValue ?? '0');
      this.totalPrice = totalPrice;
    }
  }


  // increment the quantity 
  increaseQuantity(index:number): void {
      let StoredCartItems = this.cartItems
        StoredCartItems[index].Price *= 2;
        StoredCartItems[index].quantity = (StoredCartItems[index].quantity || 1) + 1
        localStorage.setItem('cartItems', JSON.stringify(StoredCartItems));
        this.updateCart()
  }


  // decrement the quantity
  decreaseQuantity(index:number): void {
      let StoredCartItems = this.cartItems
        if (StoredCartItems[index].quantity > 1) {
        StoredCartItems[index].Price /= 2;
           }
          StoredCartItems[index].quantity = Math.max((StoredCartItems[index].quantity || 1) - 1,1)
          localStorage.setItem('cartItems', JSON.stringify(StoredCartItems));
          this.updateCart()
  }



 //remove Cart Item
  removeCartItemById(_id: any): void {
      let parsedCartItems = this.cartItems
      const itemIndex = parsedCartItems.findIndex((item: any) => item._id === _id);
        parsedCartItems.splice(itemIndex, 1);
        localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
        this.updateCart();
  }
  

  // calculate SubTotal Price
  calculateTotalPrice(cartItems: any[]): number {
    let totalPrice = 0;
    for (let data of cartItems) {
      totalPrice += parseFloat(data.Price);
    }
    return totalPrice;
  }


  //update Cart 
   updateCart(){
    const itemCount = this.cartItems.length;
    this._General.updateCartItemsCount(itemCount);
    const totalPrice = this.calculateTotalPrice(this.cartItems);
    this.localStorageService.setTotalPrice(totalPrice);
    this.totalPrice = totalPrice;
  }

}