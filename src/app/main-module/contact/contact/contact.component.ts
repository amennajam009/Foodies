import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators ,FormControl,FormGroup } from '@angular/forms';
import { WhatsappService } from 'src/app/shared/service/whatsapp.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  WhatsAppForm:FormGroup | any;
  constructor(private _whatsappService:WhatsappService , private _FormBuilder:FormBuilder) {
    this.myWhatsappForm();
   }

  ngOnInit(): void {
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
}
