import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl ,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterLoginService } from 'src/app/shared/service/register-login.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  UserRegister : FormGroup | any
  constructor(private FormBuilder:FormBuilder,
            private UserSignInSignUpService:RegisterLoginService,
            private Toaster : ToastrService) {

              this.UserRegisterModel()
             }

  ngOnInit(): void {
  }



 UserRegisterModel(){
  this.UserRegister = this.FormBuilder.group({
    firstName: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    lastName: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    Email: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    Password: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
  })
 }


 UserRegisterform(){
 const payLoad = this.UserRegister.value;
 this.UserSignInSignUpService.UserRegisterApi(payLoad).subscribe((res:any)=>{
  res;
//   if(res.Data ===false){
//  this.Toaster.error(res.Message)
//   }
//   else{
//     this.Toaster.success('User Register Successfulyy!!')
//   }
 })
 }

}
