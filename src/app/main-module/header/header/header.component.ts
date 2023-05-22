import { Component, OnInit,HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  header_variable=false
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop> 100|| document.documentElement.scrollTop>100){
      this.header_variable=true
    }
    else{
      this.header_variable=false
    }
  }
}
