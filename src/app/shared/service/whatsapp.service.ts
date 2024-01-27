import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {

  constructor(private _HttpClient:HttpClient) { }

 whatsappApi(payLoad:any){
<<<<<<< HEAD
  return this._HttpClient.post('http://localhost:3000/WhatsApp/WhatsappApi',payLoad);
=======
  return this._HttpClient.post('http://localhost:4040/WhatsApp/WhatsappApi',payLoad);
>>>>>>> e20c41dcbc5bae1b3f8176ff5e3d8f526ce1d2c3
 }

 

}
