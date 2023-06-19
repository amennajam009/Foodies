import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterLoginService } from 'src/app/shared/service/register-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  UserLogin : FormGroup | any
  constructor(private FormBuilder:FormBuilder,
              private UserLoginSignUpservice:RegisterLoginService,
              private Toaster:ToastrService,
              private Route:Router) { 
    this.UserLoginModel()
  }

  ngOnInit(): void {
  }

  UserLoginModel(){
    this.UserLogin = this.FormBuilder.group({
      Email: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      Password: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    })
  }


  UserLoginform(){
    const payLoad = this.UserLogin.value;
    this.UserLoginSignUpservice.UserLoginApi(payLoad).subscribe((res:any)=>{
      if(res.Data === false){
        this.Toaster.error(res.Message)
      }
      else{
        this.Toaster.success('User Login Successfully')
      }
     this.UserLoginSignUpservice.SetUserTokenIntoLocalStorage(res.Token)
     if(res.Data === true){
      this.Route.navigate(['/Main-module/home'])
    }
    else{
      this.Route.navigate(['/managment-module/user-login'])
    }
    })
  }
}
