import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.page.html',
  styleUrls: ['./formations.page.scss'],
})
export class FormationsPage implements OnInit {

  public searchCurrent: string = "";

  // eventSource = this.API.loadCalendar(this.API.edtSelected);
  eventSource = [];

  calendar = {
    currentDate: new Date()
  };

  constructor(
    public API: ApiService
  ) { }

  ngOnInit() {
    this.API.getAllPromos();
  }

  clickClass(event) {
    console.log(event.title);        
  }

}
