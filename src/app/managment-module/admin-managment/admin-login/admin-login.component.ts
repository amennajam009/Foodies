import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterLoginService } from 'src/app/shared/service/register-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  AdminLogin : FormGroup | any
  constructor( private FormBuilder:FormBuilder, 
               private AdminRegisterLoginService:RegisterLoginService,
               private Route:Router,
               private Toaster:ToastrService) { }

  ngOnInit(): void {
    this.AdminLoginModel();
  }

 AdminLoginModel(){
  this.AdminLogin = this.FormBuilder.group({
    Email: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    Password: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
  })
 }
 

 AdminLoginform(){
  const Payload = this.AdminLogin.value;
  this.AdminRegisterLoginService.AdminLoginApi(Payload).subscribe((res:any)=>{
    res;
    if(res.data === false){
      this.Toaster.error(res.message)
    }
    else{
      this.Toaster.success('Login Successfully!!')
    }
    this.AdminRegisterLoginService.setTokenIntoLocalStorage(res.token)
    if(res.data === true){
      this.Route.navigate(['/Admin-module'])
    }
    else{
      this.Route.navigate(['/managment-module/admin-login'])
    }
  })
 }

}
