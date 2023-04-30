import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators } from '@angular/forms';
import { MenuService } from 'src/app/shared/service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  foodcards:FormGroup | any;
  getFoodImage:any
  @ViewChild('fileSelect') fileSelect:ElementRef|any;
  constructor(private _menuService:MenuService, private _FormBuilder:FormBuilder) { 
  this.myFoodCardsModel();
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
    res;
    this.foodcards.reset();
    this.fileSelect.nativeElement.value = null;
    });
   
}



}
