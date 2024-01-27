import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private _HttpClient:HttpClient) { }

 // Starter Api's 
  StarterFoodCardApi(payLoad:any){
<<<<<<< HEAD
  return  this._HttpClient.post('http://localhost:3000/menu/starterApi',payLoad);
  }
  GetAllDataStarterFoodCardApi(){
    return this._HttpClient.get('http://localhost:3000/menu/GetAllDataOfstarterApi');
  }
  GetDataOfStarterFoodCardApiById(_id:any){
    return this._HttpClient.get(`http://localhost:3000/menu/GetDataOfstarterApiById/${_id}`)
  }
  HardDeleteStarterFoodCardById(_id:any){
    return this._HttpClient.delete(`http://localhost:3000/menu/HardDeletestarterApi/${_id}`) 
  }
  // BreakFast Api's
  BreakfastFoodCardApi(payLoad:any){
    return this._HttpClient.post('http://localhost:3000/menu/BreakFastPostApi',payLoad)
  }
  GetAllDataOfBreakfastFoodApi(){
    return this._HttpClient.get('http://localhost:3000/menu/GetBreakfastAllApi')
  }
  GetBreakfastFoodApiById(_id:any){
   return this._HttpClient.get(`http://localhost:3000/menu/GetBreakFastApiById/${_id}`)
  }
  HardDeleteBreakfastFoodApi(_id:any){
    return this._HttpClient.delete(`http://localhost:3000/menu/HardDeletebreakfastApi/${_id}`)
=======
  return  this._HttpClient.post('http://localhost:4040/menu/starterApi',payLoad);
  }
  GetAllDataStarterFoodCardApi(){
    return this._HttpClient.get('http://localhost:4040/menu/GetAllDataOfstarterApi');
  }
  GetDataOfStarterFoodCardApiById(_id:any){
    return this._HttpClient.get(`http://localhost:4040/menu/GetDataOfstarterApiById/${_id}`)
  }
  HardDeleteStarterFoodCardById(_id:any){
    return this._HttpClient.delete(`http://localhost:4040/menu/HardDeletestarterApi/${_id}`) 
  }
  // BreakFast Api's
  BreakfastFoodCardApi(payLoad:any){
    return this._HttpClient.post('http://localhost:4040/menu/BreakFastPostApi',payLoad)
  }
  GetAllDataOfBreakfastFoodApi(){
    return this._HttpClient.get('http://localhost:4040/menu/GetBreakfastAllApi')
  }
  GetBreakfastFoodApiById(_id:any){
   return this._HttpClient.get(`http://localhost:4040/menu/GetBreakFastApiById/${_id}`)
  }
  HardDeleteBreakfastFoodApi(_id:any){
    return this._HttpClient.delete(`http://localhost:4040/menu/HardDeletebreakfastApi/${_id}`)
>>>>>>> e20c41dcbc5bae1b3f8176ff5e3d8f526ce1d2c3
  }
  //lunch Api's 

  LunchFoodCardApi(payLoad:any){
<<<<<<< HEAD
   return this._HttpClient.post('http://localhost:3000/menu/LunchPostApi',payLoad)
  }
  GetAlldataOflunchApi(){
    return this._HttpClient.get('http://localhost:3000/menu/GetAlllunchApi')
  }
  GetApiOfLuchApiById(_id:any){
    return this._HttpClient.get(`http://localhost:3000/menu/GetlunchApiById/${_id}`)
  }
  HardDeletelunchApi(_id:any){
    return this._HttpClient.delete(`http://localhost:3000/menu/HardDeleteLunchApi/${_id}`)
  }
  popularFoodApi(payLoad:any){
    return this._HttpClient.post('http://localhost:3000/menu/PopularFoodApi',payLoad)
   }
   GetpopularApi(){
    return this._HttpClient.get('http://localhost:3000/menu/Getpopularapi')
   }
   GetpopularApiByid(_id:any){
    return this._HttpClient.get(`http://localhost:3000/menu/GetpopularApiById/${_id}`)
   }
   HardDeletepopularFoodApiById(_id:any){
   return this._HttpClient.delete(`http://localhost:3000/menu/HardDeletepopularApi/${_id}`)
=======
   return this._HttpClient.post('http://localhost:4040/menu/LunchPostApi',payLoad)
  }
  GetAlldataOflunchApi(){
    return this._HttpClient.get('http://localhost:4040/menu/GetAlllunchApi')
  }
  GetApiOfLuchApiById(_id:any){
    return this._HttpClient.get(`http://localhost:4040/menu/GetlunchApiById/${_id}`)
  }
  HardDeletelunchApi(_id:any){
    return this._HttpClient.delete(`http://localhost:4040/menu/HardDeleteLunchApi/${_id}`)
  }
  popularFoodApi(payLoad:any){
    return this._HttpClient.post('http://localhost:4040/menu/PopularFoodApi',payLoad)
   }
   GetpopularApi(){
    return this._HttpClient.get('http://localhost:4040/menu/Getpopularapi')
   }
   GetpopularApiByid(_id:any){
    return this._HttpClient.get(`http://localhost:4040/menu/GetpopularApiById/${_id}`)
   }
   HardDeletepopularFoodApiById(_id:any){
   return this._HttpClient.delete(`http://localhost:4040/menu/HardDeletepopularApi/${_id}`)
>>>>>>> e20c41dcbc5bae1b3f8176ff5e3d8f526ce1d2c3
   }
}
