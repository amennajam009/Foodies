import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private _HttpClient:HttpClient) { }

 // Starter Api's 
  StarterFoodCardApi(payLoad:any){
  return  this._HttpClient.post('http://localhost:7070/menu/starterApi',payLoad);
  }
  GetAllDataStarterFoodCardApi(){
    return this._HttpClient.get('http://localhost:7070/menu/GetAllDataOfstarterApi');
  }
  GetDataOfStarterFoodCardApiById(_id:any){
    return this._HttpClient.get(`http://localhost:7070/menu/GetDataOfstarterApiById/${_id}`)
  }
  HardDeleteStarterFoodCardById(_id:any){
    return this._HttpClient.delete(`http://localhost:7070/menu/HardDeletestarterApi/${_id}`) 
  }
  // BreakFast Api's
  BreakfastFoodCardApi(payLoad:any){
    return this._HttpClient.post('http://localhost:7070/menu/BreakFastPostApi',payLoad)
  }
}
