import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private HttpClient:HttpClient) { }


  UserBookedTable(payLoad:any){
   return this.HttpClient.post('http://localhost:3000/Contact/OrderTableApi',payLoad)
  }
  ContactUsApi(payLoad:any){
 return this.HttpClient.post('http://localhost:3000/Contact/ContactUsApi',payLoad)
  }
}
