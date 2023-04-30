import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/service/general.service';
import { MenuService } from 'src/app/shared/service/menu.service';

@Component({
  selector: 'app-foodies-analytics',
  templateUrl: './foodies-analytics.component.html',
  styleUrls: ['./foodies-analytics.component.css']
})
export class FoodiesAnalyticsComponent implements OnInit {
  Bannerimage:any=[];
  TwoCards:any=[];
  FourCards:any=[];
  particularproducttwo:any={}
  particularproductData:any = {}
  particularproductque:any={}
  particularproductcard:any=[]
  MakeMyIdPublic :any;
  frequentlyque:any=[];
  starterCard:any=[]
  
  // imageDetailsArray: any[] = [];
 
  // ProductArray:any = []
  Url='http://localhost:7070/'
  constructor(private _General:GeneralService , private _menuService:MenuService) { }

  ngOnInit(): void {

    // this.PopulateProductArray();
    this._General.GetHeroImage().subscribe((res:any)=>{
    this.Bannerimage=res.Result;
    this._General.GetFourCardApi().subscribe((res:any)=>{
      this.FourCards=res.Result;
      // console.log(this.FourCards)
    })  
    })
    this._General.GetTwoImage().subscribe((res:any)=>{
      this.TwoCards=res.Result;
    })

    this._General.GetFrequentlyAskedQue().subscribe((res:any)=>{
      this.frequentlyque=res.Result;
    })

    this._menuService.GetAllDataStarterFoodCardApi().subscribe((res:any)=>{
      this.starterCard=res.Result;
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
  this.particularproductcard=res.Result;
  })
}

HardDeletFourCards(_id:any){
  this.MakeMyIdPublic=_id;
  this._General.HardDeletFourCardById(_id).subscribe((res:any)=>{
      this.FourCards=res.Result;
      this.FourCards=[]
  })
}

GetTwoCardsById(_id:any){
  this.MakeMyIdPublic=_id;
 this._General.GetTwoCardById(_id).subscribe((res:any)=>{
   this.TwoCards=res.Result;
 })
}


HardDeleteTwoCards(_id:any){
  this.MakeMyIdPublic=_id;
  this._General.HardDeleteTwoCardById(_id).subscribe((res:any)=>{
    this.TwoCards=res.Result;
  })
}

GetFreqquentlyQuestions(_id:any){
 this.MakeMyIdPublic=_id;
 this._General.GetFrequentlyAskedQueById(_id).subscribe((res:any)=>{
this.particularproductque=res.Result;
 })
}

HardDeletFrequentlyQuestion(_id:any){
  this.MakeMyIdPublic=_id;
  this._General.HardDeletFrequentlyAskedQueById(_id).subscribe((res:any)=>{
    this.frequentlyque=res.Result;
    this.frequentlyque=[]
  })
}
// menu-Page
GetStarterCardById(_id:any){
this.MakeMyIdPublic=_id;
this._menuService.GetDataOfStarterFoodCardApiById(_id).subscribe((res:any)=>{
 this.starterCard=res.Result;
})
}

}


 

