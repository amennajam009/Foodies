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
  GetAllDataOfBreakfastFoodApi(){
    return this._HttpClient.get('http://localhost:7070/menu/GetBreakfastAllApi')
  }
  GetBreakfastFoodApiById(_id:any){
   return this._HttpClient.get(`http://localhost:7070/menu/GetBreakFastApiById/${_id}`)
  }
  HardDeleteBreakfastFoodApi(_id:any){
    return this._HttpClient.delete(`http://localhost:7070/menu/HardDeletebreakfastApi/${_id}`)
  }
  //lunch Api's 

  LunchFoodCardApi(payLoad:any){
   return this._HttpClient.post('http://localhost:7070/menu/LunchPostApi',payLoad)
  }
  GetAlldataOflunchApi(){
    return this._HttpClient.get('http://localhost:7070/menu/GetAlllunchApi')
  }
  GetApiOfLuchApiById(_id:any){
    return this._HttpClient.get(`http://localhost:7070/menu/GetlunchApiById/${_id}`)
  }
  HardDeletelunchApi(_id:any){
    return this._HttpClient.delete(`http://localhost:7070/menu/HardDeleteLunchApi/${_id}`)
  }
  popularFoodApi(payLoad:any){
    return this._HttpClient.post('http://localhost:7070/menu/PopularFoodApi',payLoad)
   }
   GetpopularApi(){
    return this._HttpClient.get('http://localhost:7070/menu/Getpopularapi')
   }
   GetpopularApiByid(_id:any){
    return this._HttpClient.get(`http://localhost:7070/menu/GetpopularApiById/${_id}`)
   }
}
