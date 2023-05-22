import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private HttpClient:HttpClient) { }

  UserBookedTable(payLoad:any){
   return this.HttpClient.post('http://localhost:7070/Contact/OrderTableApi',payLoad)
  }
}
