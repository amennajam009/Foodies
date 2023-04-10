import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/service/general.service';

@Component({
  selector: 'app-foodies-analytics',
  templateUrl: './foodies-analytics.component.html',
  styleUrls: ['./foodies-analytics.component.css']
})
export class FoodiesAnalyticsComponent implements OnInit {
  Bannerimage:any=[];
  Url='http://localhost:7070/'
  constructor(private _General:GeneralService) { }

  ngOnInit(): void {
    this._General.GetHeroImage().subscribe((res:any)=>{
      this.Bannerimage=res.Result;
    })
  }
  
}
