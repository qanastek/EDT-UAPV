import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.page.html',
  styleUrls: ['./formations.page.scss'],
})
export class FormationsPage implements OnInit {

  constructor(
    public api: ApiService
  ) { }

  ngOnInit() {
    this.api.getDiplomes();
  }

  onChange() {
    
  }

}
