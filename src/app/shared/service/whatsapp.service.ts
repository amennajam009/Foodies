import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {

  constructor(private _HttpClient:HttpClient) { }

 whatsappApi(payLoad:any){
  return this._HttpClient.post('http://localhost:4040/WhatsApp/WhatsappApi',payLoad);
 }

 

}
