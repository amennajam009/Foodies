import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerbookingService } from 'src/app/shared/service/customerbooking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @ViewChild('fileInput')fileInput!: ElementRef;
  MyhtmlContent: string | any;
  customerBooking: FormGroup | any;
  constructor(private customerbookingservice:CustomerbookingService,
             private formBuilder:FormBuilder,
             private _toasterService:ToastrService) { 
              this.customerbooking()
             }

  ngOnInit(): void {
    this.GetcustomerbookingApi()
  }
  
  customerbooking(){
    this.customerBooking = this.formBuilder.group({
      Username: new FormControl ('',Validators.required),
      Emailaddress: new FormControl ('',Validators.required),
      FirstName: new FormControl ('',Validators.required),
      LastName: new FormControl ('',Validators.required),
      City: new FormControl ('',Validators.required),
      // People: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      // Message: new FormControl ('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
    })
  }

  Submitcustomerbooking(){
    const Payload = this.customerBooking.value;
    this.customerbookingservice.customerbookingApi(Payload).subscribe((res:any)=>{
      this._toasterService.success(res.message)
      console.log("myres", res)
      const MyhtmlContent = res.result.html;
      console.log('content',MyhtmlContent)
      
    })
  }

  public GetcustomerbookingApi(){
    this.customerbookingservice.customerbookinggetApi().subscribe((res:any)=>{
      res;
    })
  }
}
