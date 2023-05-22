import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators ,FormControl,FormGroup } from '@angular/forms';
import { WhatsappService } from 'src/app/shared/service/whatsapp.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  phoneNumber: string = '+923064484061';
  WhatsAppForm:FormGroup | any;
  constructor(private _whatsappService:WhatsappService , private _FormBuilder:FormBuilder ,private sanitizer: DomSanitizer) {
    // this.myWhatsappForm();
   }

  ngOnInit(): void {
  }
 
  
  generateWhatsAppLink(): string {
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(this.phoneNumber)}`;
    return url;
  }
  // myWhatsappForm(){
  //   this.WhatsAppForm = this._FormBuilder.group({
  //     WhatsAppMessage: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
  //     PhoneNumber: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)])
  //   })
  // }
  
  // Submitwhatsappform(){
  //   const payLoad = this.WhatsAppForm.value;
  //   this._whatsappService.whatsappApi(payLoad).subscribe((res:any)=>{
  //   res;
  //   this.WhatsAppForm.reset();
  //   })
  // }
}
