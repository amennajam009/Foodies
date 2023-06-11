
import { HttpClient } from '@angular/common/http';
import { Injectable ,EventEmitter} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  addToCartEvent: EventEmitter<void> = new EventEmitter<void>();
  constructor(private HttpClient:HttpClient) { 
    const storedCount = localStorage.getItem('cartItemsCount');
    const initialCount = storedCount ? parseInt(storedCount) : 0;
    this.cartItemsCountSubject = new BehaviorSubject<number>(initialCount);
    this.cartItemsCount$ = this.cartItemsCountSubject.asObservable();
  }
 


  HeroImageApi(payLoad:any){
     return this.HttpClient.post('http://localhost:7070/Generalsetting/HeroImageApi',payLoad);
  }

  FourCardApi(payLoad:any){
       return this.HttpClient.post('https://foodies-backend.vercel.app/Generalsetting/FourCardsApi',payLoad);
  }

  GetFourCardApi(){
    return this.HttpClient.get('https://foodies-backend.vercel.app/Generalsetting/GetHeadingDescriptionFourCards');
  }
  GetHeroImage(){
    return this.HttpClient.get('https://foodies-backend.vercel.app/Generalsetting/GetHeroImage')
  }
  GetHeroImageById(_id:any){
    return this.HttpClient.get(`https://foodies-backend.vercel.app/Generalsetting/HeroImageGetById/${_id}`)
  }

  DeleteHeroImageById(_id:any){
    return this.HttpClient.delete(`http://localhost:7070/Generalsetting/HardDeletHeroImage/${_id}`)

  }
  GetFourcardsById(_id:any){
     return this.HttpClient.get(`https://foodies-backend.vercel.app/Generalsetting/GetFourCardsById/${_id}`)
  }
  HardDeletFourCardById(_id:any){
    return this.HttpClient.delete(`https://foodies-backend.vercel.app/Generalsetting/Harddelete/${_id}`)

  }
  TwoCardsApi(payLoad:any){
    return this.HttpClient.post('https://foodies-backend.vercel.app/Generalsetting/TwoImagesApi',payLoad)
  }
  GetTwoImage(){
    return this.HttpClient.get('https://foodies-backend.vercel.app/Generalsetting/GetTwocardsApi')
  }
  GetTwoCardById(_id:any){
    return this.HttpClient.get(`https://foodies-backend.vercel.app/Generalsetting/GetTwocardsById/${_id}`) 
  }
  HardDeleteTwoCardById(_id:any){
   return this.HttpClient.delete(`https://foodies-backend.vercel.app/Generalsetting/HardDeleteTwoimage/${_id}`)
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
     return this.HttpClient.post('https://foodies-backend.vercel.app/Generalsetting/HomeThreeCardsApi',payLoad)
  }
  ThreeHomeCardGetAllDataApi(){
    return this.HttpClient.get('https://foodies-backend.vercel.app/Generalsetting/HomeThreeCardsGetAllData');
  }
  ThreeHomeCardHardDeleteDataById(_id:any){
    return this.HttpClient.delete(`https://foodies-backend.vercel.app/Generalsetting/Harddeletethreehomecard/${_id}`)
  }
  ThreehomecardsById(_id:any){
    return this.HttpClient.get(`https://foodies-backend.vercel.app/Generalsetting/GetThreehomeCardsById/${_id}`)
  }
 

  
  private cartItemsCountSubject = new BehaviorSubject<number>(0);
  cartItemsCount$ = this.cartItemsCountSubject.asObservable();

  updateCartItemsCount(count: number) {
    this.cartItemsCountSubject.next(count);
    localStorage.setItem('cartItemsCount', count.toString());
  }

 

  
}
