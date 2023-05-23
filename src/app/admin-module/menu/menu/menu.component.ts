import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from 'src/app/shared/service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  Lunchfoodcards:FormGroup | any;
  foodcards:FormGroup | any;
  breakfastfoodcards:FormGroup | any;
  populafoodcard: FormGroup | any;
  getpopularFoodimage:any
  getFoodImage:any
  getBreakfastImage:any
  getLunchImage:any
  @ViewChild('fileSelect') fileSelect:ElementRef|any;
  constructor(private _menuService:MenuService,
              private _FormBuilder:FormBuilder,
              private _toaster:ToastrService) { 
  this.myFoodCardsModel();
  this.myBreakfastcardModel();
  this.myLunchFoodcardModel();
  this.mypoplularfoodModel();
  }

  ngOnInit(): void {
  }

  //FoodCardsModel
  myFoodCardsModel(){
    this.foodcards=this._FormBuilder.group({
      FoodName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      FoodDescription:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      FoodPrice:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    })
}

FoodImage(event:any){
this.getFoodImage = event.target.files[0];
}

Submitmyfoodform(){
  let MultipartFormData = new FormData();
    MultipartFormData.append('FoodName', this.foodcards.get('FoodName').value);
    MultipartFormData.append('FoodDescription', this.foodcards.get('FoodDescription').value);
    MultipartFormData.append('FoodPrice', this.foodcards.get('FoodPrice').value);
    MultipartFormData.append('Foodcard-image', this.getFoodImage);
    
    this._menuService.StarterFoodCardApi(MultipartFormData).subscribe((res:any) => {
      this._toaster.success(res)
    this.foodcards.reset();
    this.fileSelect.nativeElement.value = null;
    });
   
}

 myBreakfastcardModel(){
  this.breakfastfoodcards=this._FormBuilder.group({
      FoodName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      FoodDescription:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      FoodPrice:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
  })
 }

 BreakFastImage(event:any){
  this.getBreakfastImage = event.target.files[0];
 }
 SubmitmyBreakfastform(){
  let MultipleData = new FormData();
  MultipleData.append('FoodName', this.breakfastfoodcards.get('FoodName').value);
  MultipleData.append('FoodDescription', this.breakfastfoodcards.get('FoodDescription').value);
  MultipleData.append('FoodPrice', this.breakfastfoodcards.get('FoodPrice').value);
  MultipleData.append('breakcard-image', this.getBreakfastImage);

 this._menuService.BreakfastFoodCardApi(MultipleData).subscribe((res:any)=>{
  this._toaster.success(res)
  this.breakfastfoodcards.reset();
  this.fileSelect.nativeElement.value = null;
 })

 }


 myLunchFoodcardModel(){
  this.Lunchfoodcards=this._FormBuilder.group({
    FoodName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    FoodDescription:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    FoodPrice:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
  })
 }

 lunchFoodImage(event:any){
  this.getLunchImage = event.target.files[0];
 }

 Submitmylunchfoodform(){
let  MultiPartData = new FormData();
MultiPartData.append('FoodName', this.Lunchfoodcards.get('FoodName').value);
MultiPartData.append('FoodDescription', this.Lunchfoodcards.get('FoodDescription').value);
MultiPartData.append('FoodPrice', this.Lunchfoodcards.get('FoodPrice').value);
MultiPartData.append('lunchcard-image', this.getLunchImage);

this._menuService.LunchFoodCardApi(MultiPartData).subscribe((res:any)=>{
  this._toaster.success(res)
  this.Lunchfoodcards.reset();
  this.fileSelect.nativeElement.value = null;
})
 }



//popularFoodcard
mypoplularfoodModel(){
  this.populafoodcard = this._FormBuilder.group({
    CardHeading:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    CardDescription:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
  })
}

popularFoodImage(event:any){
 this.getpopularFoodimage = event.target.files[0]
}
submitpopularFood(){
  let MultipartData= new FormData();
  MultipartData.append('CardHeading', this.populafoodcard.get('CardHeading').value);
  MultipartData.append('CardDescription', this.populafoodcard.get('CardDescription').value);
  MultipartData.append('Food-image', this.getpopularFoodimage);

  this._menuService.popularFoodApi(MultipartData).subscribe((res:any)=>{
    this._toaster.success(res)
    this.populafoodcard.reset();
    this.fileSelect.nativeElement.value = null;
  })
}


}
