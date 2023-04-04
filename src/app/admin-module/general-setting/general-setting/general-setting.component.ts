import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,ReactiveFormsModule,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from 'src/app/shared/service/general.service';


@Component({
  selector: 'app-general-setting',
  templateUrl: './general-setting.component.html',
  styleUrls: ['./general-setting.component.css']
})
export class GeneralSettingComponent implements OnInit {
  
  fourcards:FormGroup | any;

  constructor(private _FormBuilder:FormBuilder , private _General:GeneralService) { 
    this.myFormModel()
  }

  ngOnInit(): void {
  }




  myFormModel(){
    this.fourcards=this._FormBuilder.group({
      Headingone: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      descriptionone: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      HeadingTwo: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      descriptionTwo: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      HeadingThree: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      descriptionThree: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      HeadingFour: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      descriptionFour: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)])
    })
  }


  Submitmyform(){
    let FormValue = this.fourcards.value;
    this._General.FourCardApi(FormValue).subscribe((resfrombackend)=>{
      resfrombackend;
      this.fourcards.reset();
    })
  }
  // let  MultipartFormData=new FormData();
  
    
  // this.newImageArray.forEach((imagedata:any)=>{
  // MultipartFormData.append('images',imagedata);
    
  //   })

 

}
