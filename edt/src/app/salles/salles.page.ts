import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.page.html',
  styleUrls: ['./salles.page.scss'],
})
export class SallesPage implements OnInit {

  public searchCurrent: string = "";

  calendar = {
    currentDate: new Date(),
    mode: 'week'
  };

  constructor(
    public API: ApiService
  ) { }

  ngOnInit() {
    if (this.API.salles === undefined) {
      this.API.getSalles();
    }
  }
  
  clickClass(event) {
    console.log(event.title);   
    // this.presentPopover(event);     
  }

}
