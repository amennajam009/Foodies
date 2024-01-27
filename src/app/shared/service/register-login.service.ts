import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {

  constructor(private HttpClient:HttpClient) { }



  AdminRegisterApi(payLoad:any){
<<<<<<< HEAD
  return  this.HttpClient.post('http://localhost:3000/AdminRegister/AdminRegister',payLoad)
  }

 AdminLoginApi(payLoad:any){
 return this.HttpClient.post('http://localhost:3000/AdminRegister/AdminLogin',payLoad)
=======
  return  this.HttpClient.post('http://localhost:4040/AdminRegister/AdminRegister',payLoad)
  }

 AdminLoginApi(payLoad:any){
 return this.HttpClient.post('http://localhost:4040/AdminRegister/AdminLogin',payLoad)
>>>>>>> e20c41dcbc5bae1b3f8176ff5e3d8f526ce1d2c3
 }

 setTokenIntoLocalStorage(payLoad:any){
  localStorage.setItem('Admin-Token',payLoad)
  }

  checkUserLogin(){
    return localStorage.getItem('Admin-Token')!==null
  }

  UserRegisterApi(payLoad:any){
<<<<<<< HEAD
    return this.HttpClient.post('http://localhost:3000/UserRegister/UserRegister',payLoad)
  }
  UserLoginApi(payLoad:any){
   return this.HttpClient.post('http://localhost:3000/UserRegister/UserLogin',payLoad)
=======
    return this.HttpClient.post('http://localhost:4040/UserRegister/UserRegister',payLoad)
  }
  UserLoginApi(payLoad:any){
   return this.HttpClient.post('http://localhost:4040/UserRegister/UserLogin',payLoad)
>>>>>>> e20c41dcbc5bae1b3f8176ff5e3d8f526ce1d2c3
  }

  SetUserTokenIntoLocalStorage(payLoad:any){
    localStorage.setItem('User-Token',payLoad)
  }
  checkUser2Login(){
    return localStorage.getItem('User-Token') !==null
  }
}
