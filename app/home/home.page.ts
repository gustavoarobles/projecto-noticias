import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data:any;
  currentYear:number=0;
  constructor() {
    this.currentYear=this.getCurrentYear();
    
  }
  

  getCurrentYear(){
    return new Date().getFullYear();
  }
   
  }
  


