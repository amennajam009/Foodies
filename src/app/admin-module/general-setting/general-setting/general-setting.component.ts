import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-general-setting',
  templateUrl: './general-setting.component.html',
  styleUrls: ['./general-setting.component.css']
})
export class GeneralSettingComponent implements OnInit {
  
  fourcards:FormGroup | any;

  constructor(private _FormBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  myFormModel(){
    this.fourcards=this._FormBuilder.group({
      Headingone: new FormControl (''),
      HeadingTwo: new FormControl (''),
      HeadingThree: new FormControl (''),
      HeadingFour: new FormControl (''),
    })
  }


  Submitmyform(){

  }
  // let  MultipartFormData=new FormData();
  
    
  // this.newImageArray.forEach((imagedata:any)=>{
  // MultipartFormData.append('images',imagedata);
    
  //   })

 

}
