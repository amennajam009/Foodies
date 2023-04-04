
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private HttpClient:HttpClient) { }

  FourCardApi(payLoad:any){
       return this.HttpClient.post('http://localhost:7070/Generalsetting/FourCardsApi',payLoad)
  }
}
