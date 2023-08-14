import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @ViewChild('fileInput')fileInput!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  
  readURL(input: any): void {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      
      reader.onload = (e: any) => {
        const profilePic = document.querySelector('.profile_pic') as HTMLImageElement;
        profilePic.src = e.target.result;
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  onFileChange(event: any): void {
    const input = event.target;
    this.readURL(input);
  }

  onUploadButtonClick(): void {
    this.fileInput.nativeElement.click();
  }

}
