import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerbookingService {

  constructor(private HttpClient:HttpClient) { }

  customerbookingApi(payLoad:any){
    return this.HttpClient.post('http://localhost:7070/customeronlinebooking/CustomerOnlineBooking',payLoad)
  }


}
