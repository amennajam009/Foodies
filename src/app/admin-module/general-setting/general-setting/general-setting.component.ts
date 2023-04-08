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
  newImageArray:any=[]
  heroImageArray:any=[]

  @ViewChild('fileSelect') fileSelect:ElementRef|any;
  

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

 

  Submitmyform() {
    let FormValue = this.fourcards.value;
  
    let MultipartFormData = new FormData();
    MultipartFormData.append('Headingone', this.fourcards.get('Headingone').value);
    MultipartFormData.append('descriptionone', this.fourcards.get('descriptionone').value);
    MultipartFormData.append('HeadingTwo', this.fourcards.get('HeadingTwo').value);
    MultipartFormData.append('descriptionTwo', this.fourcards.get('descriptionTwo').value);
    MultipartFormData.append('HeadingThree', this.fourcards.get('HeadingThree').value);
    MultipartFormData.append('descriptionThree', this.fourcards.get('descriptionThree').value);
    MultipartFormData.append('HeadingFour', this.fourcards.get('HeadingFour').value);
    MultipartFormData.append('descriptionFour', this.fourcards.get('descriptionFour').value);
  
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
 


  // SubmitHeroImage(){
  //   let MultipartFormHero = new FormData();
    
  //   this.heroImageArray.array.forEach((heroimage:any) => {
  //     MultipartFormHero.append('images',heroimage);
  //   });
    
  //   this._General.HeroImageApi(MultipartFormHero).subscribe((res:any)=>{
  //     res;
  //     this.fileSelect.nativeElement.value = null;
  //     this.heroImageArray= [];
  //   })
  // }
   



  SubmitHeroImage() {
    // Get the file input elements
    const fileInput1 = <HTMLInputElement>document.getElementById('myfile1');
    const fileInput2 = <HTMLInputElement>document.getElementById('myfile2');
  
    // Create a new FormData object
    const formData = new FormData();
  
    // Append the files to the FormData object
    if (fileInput1.files) {
      for (let i = 0; i < fileInput1.files.length; i++) {
        formData.append('images', fileInput1.files[i]);
      }
    }
    // if (fileInput2.files) {
    //   for (let i = 0; i < fileInput2.files.length; i++) {
    //     formData.append('images', fileInput2.files[i]);
    //   }
    // }
  
    // Call the HeroImageApi() method
    this._General.HeroImageApi(formData).subscribe((res: any) => {
      console.log(res);
      // Clear the file input fields
      fileInput1.value = '';
      // fileInput2.value = '';
    });
  }
  
  
  
  
  
  
 
}
