
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private HttpClient:HttpClient) { }



  HeroImageApi(payLoad:any){
     return this.HttpClient.post('http://localhost:7070/Generalsetting/HeroImageApi',payLoad);
  }

  FourCardApi(payLoad:any){
       return this.HttpClient.post('http://localhost:7070/Generalsetting/FourCardsApi',payLoad);
  }

  GetFourCardApi(){
    return this.HttpClient.get('http://localhost:7070/Generalsetting/GetHeadingDescriptionFourCards');
  }
  GetHeroImage(){
    return this.HttpClient.get('http://localhost:7070/Generalsetting/GetHeroImage')
  }
  GetHeroImageById(_id:any){
    return this.HttpClient.get(`http://localhost:7070/Generalsetting/HeroImageGetById/${_id}`)
  }

  DeleteHeroImageById(_id:any){
    return this.HttpClient.delete(`http://localhost:7070/Generalsetting/HardDeletHeroImage/${_id}`)

  }
  GetFourcardsById(_id:any){
     return this.HttpClient.get(`http://localhost:7070/Generalsetting/GetFourCardsById/${_id}`)
  }
  HardDeletFourCardById(_id:any){
    return this.HttpClient.delete(`http://localhost:7070/Generalsetting/Harddelete/${_id}`)

  }
  TwoCardsApi(payLoad:any){
    return this.HttpClient.post('http://localhost:7070/Generalsetting/TwoImagesApi',payLoad)
  }
  GetTwoImage(){
    return this.HttpClient.get('http://localhost:7070/Generalsetting/GetTwocardsApi')
  }
  GetTwoCardById(_id:any){
    return this.HttpClient.get(`http://localhost:7070/Generalsetting/GetTwocardsById/${_id}`) 
  }
  HardDeleteTwoCardById(_id:any){
   return this.HttpClient.delete(`http://localhost:7070/Generalsetting/HardDeleteTwoimage/${_id}`)
  }

  FrequentlyAskedQueAPI(payLoad:any){
   return this.HttpClient.post('http://localhost:7070/Generalsetting/FrequentlyAskedQestions',payLoad);
  }
  GetFrequentlyAskedQue(){
    return this.HttpClient.get('http://localhost:7070/Generalsetting/GetFrequentlyAskedQestions')
  }
  GetFrequentlyAskedQueById(_id:any){
    return this.HttpClient.get(`http://localhost:7070/Generalsetting/GetFrequeById/${_id}`)
  }
  HardDeletFrequentlyAskedQueById(_id:any){
    return this.HttpClient.delete(`http://localhost:7070/Generalsetting/HardDeletFrequentlyAskedQue/${_id}`)
  }

  ThreeHomeCardApi(payLoad:any){
     return this.HttpClient.post('http://localhost:7070/Generalsetting/HomeThreeCardsApi',payLoad)
  }
  ThreeHomeCardGetAllDataApi(){
    return this.HttpClient.get('http://localhost:7070/Generalsetting/HomeThreeCardsGetAllData');
  }
  ThreeHomeCardHardDeleteDataById(_id:any){
    return this.HttpClient.delete(`http://localhost:7070/Generalsetting/Harddeletethreehomecard/${_id}`)
  }
  ThreehomecardsById(_id:any){
    return this.HttpClient.get(`http://localhost:7070/Generalsetting/GetThreehomeCardsById/${_id}`)
  }
 
}
