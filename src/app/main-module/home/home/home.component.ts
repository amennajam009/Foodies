import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/service/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 
  data: any=[];
  AllFourCards:any=[];
  AnotherImageUrl: any = [];
  Url='http://localhost:7070/';
  anotherUrl = 'http://localhost:7070/';

  constructor(private _General:GeneralService) { }

  ngOnInit(): void {
    this._General.GetFourCardApi().subscribe((res:any)=>{
      this.AllFourCards = res.Result;
      this.anotherUrl = res.anotherUrl; // Assign the received data to your component variable
    });

   
  }

}
