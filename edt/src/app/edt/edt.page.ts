import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edt',
  templateUrl: './edt.page.html',
  styleUrls: ['./edt.page.scss'],
})
export class EdtPage implements OnInit {

  calendar = {
    currentDate: new Date(),
    mode: 'week'
  };
  
  // edt = JSON.parse(this.route.snapshot.paramMap.get('edt'));

  constructor(
    public API: ApiService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.calendar.mode = 'week';
  }

  clickClass(event) {
    console.log(event.title);   
    // this.presentPopover(event);     
  }

}
