
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
     return this.HttpClient.post('http://localhost:4040/Generalsetting/HeroImageApi',payLoad);
  }

  FourCardApi(payLoad:any){
       return this.HttpClient.post('http://localhost:4040/Generalsetting/FourCardsApi',payLoad);
  }

  GetFourCardApi(){
    return this.HttpClient.get('http://localhost:4040/Generalsetting/GetHeadingDescriptionFourCards');
  }
  GetHeroImage(){
    return this.HttpClient.get('http://localhost:4040/Generalsetting/GetHeroImage')
  }
  GetHeroImageById(_id:any){
    return this.HttpClient.get(`http://localhost:4040/Generalsetting/HeroImageGetById/${_id}`)
  }

  DeleteHeroImageById(_id:any){
    return this.HttpClient.delete(`http://localhost:4040/Generalsetting/HardDeletHeroImage/${_id}`)

  }
  GetFourcardsById(_id:any){
     return this.HttpClient.get(`http://localhost:4040/Generalsetting/GetFourCardsById/${_id}`)
  }
  HardDeletFourCardById(_id:any){
    return this.HttpClient.delete(`http://localhost:4040/Generalsetting/Harddelete/${_id}`)

  }
  TwoCardsApi(payLoad:any){
    return this.HttpClient.post('http://localhost:4040/Generalsetting/TwoImagesApi',payLoad)
  }
  GetTwoImage(){
    return this.HttpClient.get('http://localhost:4040/Generalsetting/GetTwocardsApi')
  }
  GetTwoCardById(_id:any){
    return this.HttpClient.get(`http://localhost:4040/Generalsetting/GetTwocardsById/${_id}`) 
  }
  HardDeleteTwoCardById(_id:any){
   return this.HttpClient.delete(`http://localhost:4040/Generalsetting/HardDeleteTwoimage/${_id}`)
  }

  FrequentlyAskedQueAPI(payLoad:any){
   return this.HttpClient.post('http://localhost:4040/Generalsetting/FrequentlyAskedQestions',payLoad);
  }
  GetFrequentlyAskedQue(){
    return this.HttpClient.get('http://localhost:4040/Generalsetting/GetFrequentlyAskedQestions')
  }
  GetFrequentlyAskedQueById(_id:any){
    return this.HttpClient.get(`http://localhost:4040/Generalsetting/GetFrequeById/${_id}`)
  }
  HardDeletFrequentlyAskedQueById(_id:any){
    return this.HttpClient.delete(`http://localhost:4040/Generalsetting/HardDeletFrequentlyAskedQue/${_id}`)
  }

  ThreeHomeCardApi(payLoad:any){
     return this.HttpClient.post('http://localhost:4040/Generalsetting/HomeThreeCardsApi',payLoad)
  }
  ThreeHomeCardGetAllDataApi(){
    return this.HttpClient.get('http://localhost:4040/Generalsetting/HomeThreeCardsGetAllData');
  }
  ThreeHomeCardHardDeleteDataById(_id:any){
    return this.HttpClient.delete(`http://localhost:4040/Generalsetting/Harddeletethreehomecard/${_id}`)
  }
  ThreehomecardsById(_id:any){
    return this.HttpClient.get(`http://localhost:4040/Generalsetting/GetThreehomeCardsById/${_id}`)
  }
 
  orderPlace(payLoad:any){
    return this.HttpClient.post(`http://localhost:4040/orderplace/PlaceOrder`,payLoad)
  }

  
  private cartItemsCountSubject = new BehaviorSubject<number>(0);
  cartItemsCount$ = this.cartItemsCountSubject.asObservable();

  updateCartItemsCount(count: number) {
    this.cartItemsCountSubject.next(count);
    localStorage.setItem('cartItemsCount', count.toString());
  }

 

  
}
