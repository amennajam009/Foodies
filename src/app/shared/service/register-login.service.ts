import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {

  constructor(private HttpClient:HttpClient) { }



  AdminRegisterApi(payLoad:any){
  return  this.HttpClient.post('http://localhost:7070/AdminRegister/AdminRegister',payLoad)
  }

 AdminLoginApi(payLoad:any){
 return this.HttpClient.post('http://localhost:7070/AdminRegister/AdminLogin',payLoad)
 }

 setTokenIntoLocalStorage(payLoad:any){
  localStorage.setItem('Admin-Token',payLoad)
  }

  checkUserLogin(){
    return localStorage.getItem('Admin-Token')!==null
  }

  UserRegisterApi(payLoad:any){
    return this.HttpClient.post('http://localhost:7070/UserRegister/UserRegister',payLoad)
  }
  UserLoginApi(payLoad:any){
   return this.HttpClient.post('http://localhost:7070/UserRegister/UserLogin',payLoad)
  }

  SetUserTokenIntoLocalStorage(payLoad:any){
    localStorage.setItem('User-Token',payLoad)
  }
  checkUser2Login(){
    return localStorage.getItem('User-Token') !==null
  }
}
