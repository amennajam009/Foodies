import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators ,FormControl,FormGroup } from '@angular/forms';
import { WhatsappService } from 'src/app/shared/service/whatsapp.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { ContactService } from 'src/app/shared/service/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  OrderTable:FormGroup | any
  phoneNumber: string = '+923064484061';
  WhatsAppForm:FormGroup | any;
  ContactUs : FormGroup | any
  constructor(private _whatsappService:WhatsappService,
             private _FormBuilder:FormBuilder ,
             private _contactservice:ContactService,
             private _toasterService:ToastrService) {
    // this.myWhatsappForm();
    this.Ordertablemodel();
    this.myContactUsModel();
   }

  ngOnInit(): void {
  }
 
  Ordertablemodel(){
    this.OrderTable = this._FormBuilder.group({
      YourName: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      YourEmail: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      YourPhone: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      Date: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      Time: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      People: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      Message: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    })
  }

  SubmitOrderTableform(){
    const payLoad = this.OrderTable.value;
    this._contactservice.UserBookedTable(payLoad).subscribe((res:any)=>{
      this._toasterService.success(res.message)

      this.OrderTable.reset();
    })
  }

  myContactUsModel(){
    this.ContactUs = this._FormBuilder.group({
      UserName: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      UserEmail: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      Subject: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      Message: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),

    })
  }


SubmitContactUsform(){
  const payLoad = this.ContactUs.value;
  this._contactservice.ContactUsApi(payLoad).subscribe((res:any)=>{
    this._toasterService.success(res.message)
    this.ContactUs.reset();
  })
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
