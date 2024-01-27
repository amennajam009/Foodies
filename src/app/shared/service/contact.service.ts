import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private HttpClient:HttpClient) { }


  UserBookedTable(payLoad:any){
<<<<<<< HEAD
   return this.HttpClient.post('http://localhost:3000/Contact/OrderTableApi',payLoad)
  }
  ContactUsApi(payLoad:any){
 return this.HttpClient.post('http://localhost:3000/Contact/ContactUsApi',payLoad)
=======
   return this.HttpClient.post('http://localhost:4040/Contact/OrderTableApi',payLoad)
  }
  ContactUsApi(payLoad:any){
 return this.HttpClient.post('http://localhost:4040/Contact/ContactUsApi',payLoad)
>>>>>>> e20c41dcbc5bae1b3f8176ff5e3d8f526ce1d2c3
  }
}
