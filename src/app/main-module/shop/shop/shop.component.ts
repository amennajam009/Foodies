import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators ,FormControl,FormGroup } from '@angular/forms';
import { MenuService } from 'src/app/shared/service/menu.service';
import { WhatsappService } from 'src/app/shared/service/whatsapp.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  data: any=[];
  AllLunchCards:any=[];
  AllstarterCards:any=[];
  AllbreakfastCards:any=[];
  Url='http://localhost:7070/';
  constructor(private _menuService:MenuService,  private _FormBuilder:FormBuilder) { 

  }

  ngOnInit(): void { 
  this.GetFoodCardApi();
  this.GetBreakFastApi();
  this.GetLunchFoodApi();
  }

public GetFoodCardApi(){
  this._menuService.GetAllDataStarterFoodCardApi().subscribe((res:any)=>{
    this.AllstarterCards=res.Result;
  })
}
public GetBreakFastApi(){
  this._menuService.GetAllDataOfBreakfastFoodApi().subscribe((res:any)=>{
    this.AllbreakfastCards=res.Result;
  })
}

public GetLunchFoodApi(){
  this._menuService.GetAlldataOflunchApi().subscribe((res:any)=>{
    this.AllLunchCards=res.Result;
  })
}

}
