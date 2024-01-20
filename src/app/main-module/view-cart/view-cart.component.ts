import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/shared/service/general.service';
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
   @ViewChild('paymentRef',{static: true}) paymentRef!:ElementRef
  constructor(private _General:GeneralService,
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
            this.router.navigate(['/Main-module/confirm'])
          }
        });
      },
      onError: (error: any) => {
        console.log(error);
      }
    }).render(this.paymentRef.nativeElement)
    console.log(paypal)
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

 
  removeCartItemById(_id: any): void {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      let parsedCartItems = JSON.parse(cartItems);
      // Find the index of the item to be removed
      const itemIndex = parsedCartItems.findIndex((item: any) => item._id === _id);
      if (itemIndex !== -1) {
        // Remove the item from the cartItems array
        parsedCartItems.splice(itemIndex, 1);
        // Update the localStorage with the modified cartItems
        localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
        // Update the cartItems array in the component
        this.cartItems = parsedCartItems;
        const itemCount = this.cartItems.length;
        this._General.updateCartItemsCount(itemCount);
        // Recalculate the total price
        let totalPrice = this.calculateTotalPrice(parsedCartItems);
        // Store the total price in localStorage
        localStorage.setItem('totalPrice', totalPrice.toString());
        // Update the totalPrice in the component
        this.totalPrice = totalPrice;
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
}



//save for later use 

// removeCartItemById(_id: any): void {
//   const cartItems = localStorage.getItem('cartItems');
//   if (cartItems) {
//     const parsedCartItems = JSON.parse(cartItems);
//     const updatedCartItems = parsedCartItems.filter((item: any) => item._id !== _id);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//     this.cartItems = updatedCartItems;
//     const itemCount = updatedCartItems.length;
//     this._General.updateCartItemsCount(itemCount);
//     const totalPrice = this.calculateTotalPrice(updatedCartItems);
//     localStorage.setItem('totalPrice', totalPrice.toString());
//     this.totalPrice = totalPrice;
//   }
// }

// calculateTotalPrice(cartItems: any[]): number {
//   return cartItems.reduce((total: number, item: any) => total + parseFloat(item.Price), 0);
// }