import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/shared/service/menu.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  data: any=[];
  AllstarterCards:any=[];
  Url='http://localhost:7070/';
  constructor(private _menuService:MenuService) { }

  ngOnInit(): void { 
  this.GetFoodCardApi();
  }

public GetFoodCardApi(){
  this._menuService.GetAllDataStarterFoodCardApi().subscribe((res:any)=>{
    this.AllstarterCards=res.Result;
  })
}
 
}
