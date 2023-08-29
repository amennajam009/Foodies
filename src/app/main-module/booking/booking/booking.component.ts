import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CustomerbookingService } from 'src/app/shared/service/customerbooking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @ViewChild('fileInput')fileInput!: ElementRef;
  constructor(private customerbookingservice:CustomerbookingService) { }

  ngOnInit(): void {
  }
  
}
