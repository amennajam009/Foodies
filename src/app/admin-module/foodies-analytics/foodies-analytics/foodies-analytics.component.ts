import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/service/general.service';

@Component({
  selector: 'app-foodies-analytics',
  templateUrl: './foodies-analytics.component.html',
  styleUrls: ['./foodies-analytics.component.css']
})
export class FoodiesAnalyticsComponent implements OnInit {
  Bannerimage:any=[];
  FourCards:any=[];
  particularproductData:any = {}
  particularproductcard:any=[]
  MakeMyIdPublic :any;
  // imageDetailsArray: any[] = [];
 
  // ProductArray:any = []
  Url='http://localhost:7070/'
  constructor(private _General:GeneralService) { }

  ngOnInit(): void {

    // this.PopulateProductArray();
    this._General.GetHeroImage().subscribe((res:any)=>{
    this.Bannerimage=res.Result;
    this._General.GetFourCardApi().subscribe((res:any)=>{
      this.FourCards=res.Result;
      console.log(this.FourCards)
    })  
    })
  }

GetHeroImagebyId(_id:any){
  this.MakeMyIdPublic=_id;
  this._General.GetHeroImageById(_id).subscribe((res:any)=>{
   this.particularproductData=res.Result;   
  })
}

HardDeleteHeroImage(_id:any){
  this.MakeMyIdPublic=_id;
  this._General.DeleteHeroImageById(_id).subscribe((res:any)=>{
     this.Bannerimage=res.Result;
     this.Bannerimage=[]
  })

}


GetFourCardsByItId(_id:any){
  this.MakeMyIdPublic=_id;
  this._General.GetFourcardsById(_id).subscribe((res:any)=>{
  // this.FourCards=[]
  this.particularproductcard=res.Result;
  })
}

HardDeletFourCards(_id:any){
  this.MakeMyIdPublic=_id;
  this._General.HardDeletFourCardById(_id).subscribe((res:any)=>{
      this.FourCards=res.Result;
      // this.FourCards=[]
  })
}


}
