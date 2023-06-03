import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,ReactiveFormsModule,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from 'src/app/shared/service/general.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-general-setting',
  templateUrl: './general-setting.component.html',
  styleUrls: ['./general-setting.component.css']
})
export class GeneralSettingComponent implements OnInit {
  twoImages:any
  cardImage:any
  threeImages:any
  Threehomecards:FormGroup | any ; 
  fourcards:FormGroup | any;
  FrequentlyQue:FormGroup | any;
  newImageArray:any=[]
  heroImageArray:any=[]
  TwoCardsArray:any=[]
  
  @ViewChild('fileSelect') fileSelect:ElementRef|any;
  

  constructor(private _FormBuilder:FormBuilder,
              private _General:GeneralService,
              private _toaster:ToastrService) { 
    this.myFormModel();
    this.mySecondForm();
    this.ThreehomecardModel();
  }

  ngOnInit(): void {
  }


 ThreehomecardModel(){
  this.Threehomecards=this._FormBuilder.group({
    imageHeading: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    backflipCardHeading: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    backflipCardDescription: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    backflipCardDescription2: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    Price: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
  })
 }
 threehomeCardImage(event:any){
  this.threeImages =event.target.files[0];
 }
 Submitmythreecardsform(){
  let MultipartFormData = new FormData();
  MultipartFormData.append('imageHeading', this.Threehomecards.get('imageHeading').value);
  MultipartFormData.append('backflipCardHeading', this.Threehomecards.get('backflipCardHeading').value);
  MultipartFormData.append('backflipCardDescription', this.Threehomecards.get('backflipCardDescription').value);
  MultipartFormData.append('backflipCardDescription2', this.Threehomecards.get('backflipCardDescription2').value);
  MultipartFormData.append('Price', this.Threehomecards.get('Price').value);
  MultipartFormData.append('threecard-image', this.threeImages);

  this._General.ThreeHomeCardApi(MultipartFormData).subscribe((res:any)=>{
    res;
    this._toaster.success('Card Created Successfully!!')
    this.Threehomecards.reset();
  })
 }


  myFormModel(){
    this.fourcards=this._FormBuilder.group({
      cardName: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      cardDescriptionFour: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
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
  
    // this.newImageArray.forEach((imagedata: any) => {
    //   MultipartFormData.append('images', imagedata);
    // });
  
    this._General.FourCardApi(MultipartFormData).subscribe((res: any) => {
      res;
      this._toaster.success('Card Created Sucessfully!!')
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
    this.twoImages = event.target.files[0]; 
  }
  
  submitTwoImages(){
    let MultipartFormData = new FormData();
    MultipartFormData.append('images', this.twoImages);
  
    this._General.TwoCardsApi(MultipartFormData).subscribe((res: any) => {
      res;
      this._toaster.success('Uploaded Successfully!!')
      this.twoImages.reset();
      this.fileSelect.nativeElement.value = null;
      this.TwoCardsArray = [];
      // Manually clear the image array
      this.TwoCardsArray.length = 0;
    });
  }


 
mySecondForm(){
  this.FrequentlyQue = this._FormBuilder.group({
    headingQue: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    AnswerQue: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
  })
}

Submitfreqform(){
  const payload = this.FrequentlyQue.value;
  this._General.FrequentlyAskedQueAPI(payload).subscribe((res:any)=>{
    res;
    this._toaster.success('Uploaded Successfully!!')
    this.FrequentlyQue.reset();
  })
}
 
}

