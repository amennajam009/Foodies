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
  // WhatsAppMessage: any = '';
  // PhoneNumber:any = '';
  WhatsAppForm:FormGroup | any;
  data: any=[];
  AllstarterCards:any=[];
  AllbreakfastCards:any=[];
  Url='http://localhost:7070/';
  constructor(private _menuService:MenuService, private _whatsappService:WhatsappService , private _FormBuilder:FormBuilder) { 
 this.myWhatsappForm();
  }

  ngOnInit(): void { 
  this.GetFoodCardApi();
  this.GetBreakFastApi();
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

myWhatsappForm(){
  this.WhatsAppForm = this._FormBuilder.group({
    WhatsAppMessage: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    PhoneNumber: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)])
  })
}

Submitwhatsappform(){
  const payLoad = this.WhatsAppForm.value;
  this._whatsappService.whatsappApi(payLoad).subscribe((res:any)=>{
  res;
  })
}
// sendMessage(){
//   this._whatsappService.whatsappApi(this.PhoneNumber).subscribe((response:any )=> {
//     console.log(response);
//     alert('Message sent successfully!');
//   }, error => {
//     console.error(error);
//     alert('Error sending message!');
//   });
// }
}
