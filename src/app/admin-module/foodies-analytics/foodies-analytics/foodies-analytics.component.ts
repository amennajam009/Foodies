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
  StarterCards:any=[];
  BreakFastCards:any=[];
  particularproducttwo:any={};
  particularproductData:any = {};
  particularproductque:any={};
  particularproductsta:any={};
  particularproductbreak:any={};
  particularproductcard:any={};
  particularproductLunchcard:any={}
  MakeMyIdPublic :any;
  frequentlyque:any=[];
  lunchCards:any=[];

  
  // imageDetailsArray: any[] = [];
 
  // ProductArray:any = []
  Url='http://localhost:7070/'
  constructor(private _General:GeneralService , private _menuService:MenuService) { }

  ngOnInit(): void {
    //populate-Array to remove data 
    this.PopulateBreakfastArray();
    this.PopulateStarterArray();
    this.PopulateQuestionArray();
    this.PopulateProductArray();
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
      this.StarterCards=res.Result;
    })
    this._menuService.GetAllDataOfBreakfastFoodApi().subscribe((res:any)=>{
      this.BreakFastCards=res.Result;
    })
    this._menuService.GetAlldataOflunchApi().subscribe((res:any)=>{
      this.lunchCards=res.Result;
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
      this.PopulateProductArray();
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
    this.PopulateProductArray();
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
    this.PopulateQuestionArray();
  })
}

StarterById(_id:any){
this.MakeMyIdPublic=_id;  
this._menuService.GetDataOfStarterFoodCardApiById(_id).subscribe((res:any)=>{
  this.particularproductsta=res.Result;
 
})
}

HardDeleteStarterById(_id:any){
  this.MakeMyIdPublic=_id;
  this._menuService.HardDeleteStarterFoodCardById(_id).subscribe((res:any)=>{
   res.Result;
   this.StarterCards=[]
   this.PopulateStarterArray();

  })
}

GetBreakfastById(_id:any){
  this.MakeMyIdPublic=_id;
  this._menuService.GetBreakfastFoodApiById(_id).subscribe((res:any)=>{
    res.Result;
  this.particularproductbreak=res.Result;
  })
}

HardDeleteBreakfastById(_id:any){
  this.MakeMyIdPublic=_id;
  this._menuService.HardDeleteBreakfastFoodApi(_id).subscribe((res:any)=>{
    res.Result;
    this.BreakFastCards=[]
    this.PopulateBreakfastArray();
  })
}

//populateProductArray To Clear correctly my analytics
PopulateProductArray(){
  this._General.GetFourCardApi().subscribe((Responsefrombackend:any)=>{
    Responsefrombackend.Result.forEach((element:any) => {
     if(element.softDeleteStatus !==1){
       this.FourCards.push(element);
     }
    });
   })
 }

 PopulateQuestionArray(){
  this._General.GetFrequentlyAskedQue().subscribe((res:any)=>{
    res.Result.forEach((element:any) => {
      if(element.softDeleteStatus !==1){
        this.frequentlyque.push(element);
      }
    });
  })
 }


 PopulateStarterArray(){
  this._menuService.GetAllDataStarterFoodCardApi().subscribe((res:any)=>{
    res.Result.forEach((element:any) => {
      if(element.softDeleteStatus !==1){
        this.StarterCards.push(element)
      }
    });
  })
 }

 PopulateBreakfastArray(){
  this._menuService.GetAllDataOfBreakfastFoodApi().subscribe((res:any)=>{
    res.Result.forEach((element:any) => {
      if(element.softDeleteStatus !==1){
        this.BreakFastCards.push(element)
      }
    });
  })
 }
}


 

