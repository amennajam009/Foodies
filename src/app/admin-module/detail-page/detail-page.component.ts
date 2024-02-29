import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/shared/service/general.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  productId: any;
  url = 'http://localhost:4040/';
  threeHomeCards:any = {}
  constructor(private route:ActivatedRoute,
              private _General:GeneralService) { }

  ngOnInit(): void {
    this.getProductDetail()
  }

  getProductDetail(){
    this.productId = this.route.snapshot.paramMap.get('id')
    console.log('idddddd',this.productId)
    this._General.ThreehomecardsById(this.productId).subscribe((res:any)=>{
      this.threeHomeCards = res.Result
      console.log(this.threeHomeCards)
    })
  }

}
