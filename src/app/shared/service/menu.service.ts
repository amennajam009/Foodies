import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private _HttpClient:HttpClient) { }


  StarterFoodCardApi(payLoad:any){
  return  this._HttpClient.post('http://localhost:7070/menu/starterApi',payLoad)
  }
  
}
