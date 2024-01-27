import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GeneralService } from 'src/app/shared/service/general.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  PlaceOrder:FormGroup | any ;
  particualarproductofthreehomecards: any =[];
  AllFourCards : any = []
  MakeMyIdPublic: any;
  Url = 'http://localhost:3000/';
  ThreeHomeCards: any ;
  selectedItemId: any;
  cartItems: any[] = [];
 
  constructor(private _General:GeneralService,
             private _FormBuilder:FormBuilder,
             private _toaster:ToastrService) {
              this.OrderFormModel()
             }
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

  OrderFormModel(){
    this.PlaceOrder=this._FormBuilder.group({
      FirstName: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      LastName: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      PhoneNumber: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      Email: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      DeliveryAddress: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      StreetNumber: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    })
   }

   SubmitOrder(){
    const payload = this.PlaceOrder.value;
    this._General.orderPlace(payload).subscribe((res:any)=>{
      res;
      if(res.data === false){
        this._toaster.error(res.message)
      }

      else{
        this._toaster.success('Placed Your Successfully!! 😊') 
        localStorage.removeItem('cartItems')
        localStorage.removeItem('totalPrice')
        localStorage.removeItem('cartItemsCount')
      }
      
      this.PlaceOrder.reset();
    })
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

  GetFourCardbyId(_id:any){
    this.MakeMyIdPublic = _id;
    this._General.GetFourcardsById(_id).subscribe((res:any)=>{
      this.AllFourCards = res.Result;
      // this.particualarproductofthreehomecards = res.Result;
    })
  }

  GetThreeCardById(_id: any) {
    this.MakeMyIdPublic = _id;
    this._General.ThreehomecardsById(_id).subscribe((res: any) => {
      this.particualarproductofthreehomecards = res.Result;
    });
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