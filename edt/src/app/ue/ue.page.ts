import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ue',
  templateUrl: './ue.page.html',
  styleUrls: ['./ue.page.scss'],
})
export class UePage implements OnInit {

  public searchCurrent: string = "";
  
  calendar = {
    currentDate: new Date(),
    mode: 'week'
  };

  constructor(
    public API: ApiService
  ) { }

  ngOnInit() {
    if (this.API.ue === undefined) {
      this.API.getUe();
    }
  }
  
  clickClass(event) {
    console.log(event.title);   
    // this.presentPopover(event);     
  }

}
