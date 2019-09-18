import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ueo',
  templateUrl: './ueo.page.html',
  styleUrls: ['./ueo.page.scss'],
})
export class UeoPage implements OnInit {

  public searchCurrent: string = "";
  
  calendar = {
    currentDate: new Date()
  };

  constructor(
    public API: ApiService
  ) { }

  ngOnInit() {
    if (this.API.ueo === undefined) {
      this.API.getUeo();
    }
  }
  
  clickClass(event) {
    console.log(event.title);   
    // this.presentPopover(event);     
  }

}
