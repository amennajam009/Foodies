import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerbookingService {

  constructor(private HttpClient:HttpClient) { }

  customerbookingApi(payLoad:any){
<<<<<<< HEAD
    return this.HttpClient.post('http://localhost:3000/customeronlinebooking/CustomerOnlineBooking',payLoad)
  }

  customerbookinggetApi(){
    return this.HttpClient.get('http://localhost:3000/customeronlinebooking/CustomerOnlineBookinggetAPI')
=======
    return this.HttpClient.post('http://localhost:4040/customeronlinebooking/CustomerOnlineBooking',payLoad)
  }

  customerbookinggetApi(){
    return this.HttpClient.get('http://localhost:4040/customeronlinebooking/CustomerOnlineBookinggetAPI')
>>>>>>> e20c41dcbc5bae1b3f8176ff5e3d8f526ce1d2c3
  }


}
