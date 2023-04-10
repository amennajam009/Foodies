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
  cardImage:any
  fourcards:FormGroup | any;
  newImageArray:any=[]
  heroImageArray:any=[]
  TwoCardsArray:any=[]
  
  @ViewChild('fileSelect') fileSelect:ElementRef|any;
  

  constructor(private _FormBuilder:FormBuilder , private _General:GeneralService) { 
    this.myFormModel()
  }

  ngOnInit(): void {
  }




  myFormModel(){
    this.fourcards=this._FormBuilder.group({
      cardName: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      cardDescriptionFour: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      // HeadingTwo: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      // descriptionTwo: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      // HeadingThree: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      // descriptionThree: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      // HeadingFour: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      // descriptionFour: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)])
    })
  }


 

 
  getImages(event: any){
    let fileLength=event.target.files.length;
    if(event.target.files.length<=5){
      [...event.target.files].forEach(element => this.newImageArray.push(element) );
    }
    else{
      this.newImageArray=[]
      this.fileSelect.nativeElement.value=null
      
      
    }
  }

  getCardImage(event:any){
    this.cardImage = event.target.files[0]; 
  }

  Submitmyform() {
  
    let MultipartFormData = new FormData();
    MultipartFormData.append('cardName', this.fourcards.get('cardName').value);
    MultipartFormData.append('cardDescriptionFour', this.fourcards.get('cardDescriptionFour').value);
    MultipartFormData.append('card-image', this.cardImage);
    // MultipartFormData.append('descriptionTwo', this.fourcards.get('descriptionTwo').value);
    // MultipartFormData.append('HeadingThree', this.fourcards.get('HeadingThree').value);
    // MultipartFormData.append('descriptionThree', this.fourcards.get('descriptionThree').value);
    // MultipartFormData.append('HeadingFour', this.fourcards.get('HeadingFour').value);
    // MultipartFormData.append('descriptionFour', this.fourcards.get('descriptionFour').value);
  
    this.newImageArray.forEach((imagedata: any) => {
      MultipartFormData.append('images', imagedata);
    });
  
    this._General.FourCardApi(MultipartFormData).subscribe((res: any) => {
      res;
      this.fourcards.reset();
      this.fileSelect.nativeElement.value = null;
      this.newImageArray = [];
     // Manually clear the image array
     this.newImageArray.length = 0;
    });



      // reset file input fields
  const fileInputs = document.querySelectorAll('input[type=file]');
  fileInputs.forEach((input: any) => {
    input.value = '';
  });
  }

  HeroImages(event:any){
    let fileLength=event.target.files.length;
    if(event.target.files.length<=5){
      [...event.target.files].forEach(element => this.heroImageArray.push(element) );
    }
    else{
      this.heroImageArray=[]
      this.fileSelect.nativeElement.value=null
      
      
    }
  }
 


  SubmitHeroImage() {
    // Get the file input elements
    const fileInput1 = <HTMLInputElement>document.getElementById('myfile1');

    // Create a new FormData object
    const formData = new FormData();
  
    // Append the files to the FormData object
    if (fileInput1.files) {
      for (let i = 0; i < fileInput1.files.length; i++) {
        formData.append('images', fileInput1.files[i]);
      }
    }
    this._General.HeroImageApi(formData).subscribe((res: any) => {
      console.log(res);
      // Clear the file input fields
      fileInput1.value = '';
    });
  }
  

  TwoImages(event:any){
    let fileLength=event.target.files.length;
    if(event.target.files.length<=5){
      [...event.target.files].forEach(element => this.TwoCardsArray.push(element) );
    }
    else{
      this.TwoCardsArray=[]
      this.fileSelect.nativeElement.value=null    
    }
  }

  submitTwoImages(){
    const myfile4 = <HTMLInputElement>document.getElementById('myfile4');
    const formData = new FormData();
    if(myfile4.files){
      for(let i=0; i< myfile4.files.length; i++){
        formData.append('images', myfile4.files[i]);
      }
    }
    this._General.TwoCardsApi(formData).subscribe((res:any)=>{
      console.log(res);
      myfile4.value=''
    })
  
  }
 
}
