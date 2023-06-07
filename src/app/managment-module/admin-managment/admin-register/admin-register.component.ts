import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterLoginService } from 'src/app/shared/service/register-login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  AdminRegister:FormGroup | any;
  
  constructor(private FormBuilder:FormBuilder , private AdminRegisterLoginService:RegisterLoginService , private Toaster:ToastrService) { }

  ngOnInit(): void {
    this.AdminRegisterModel()
  }


  AdminRegisterModel(){
    this.AdminRegister = this.FormBuilder.group({
      FirstName: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      LastName: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      Email: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      Password: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    })
  }

  AdminRegisterform(){
    const payload = this.AdminRegister.value;
    this.AdminRegisterLoginService.AdminRegisterApi(payload).subscribe((res:any)=>{
      res;
      if(res.Data ===false){
        this.Toaster.error(res.message)
      }
      else{
        this.Toaster.success('Register Successfulyy!!')
      }
    })
    
  }


}
