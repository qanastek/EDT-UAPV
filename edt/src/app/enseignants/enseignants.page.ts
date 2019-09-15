import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.page.html',
  styleUrls: ['./enseignants.page.scss'],
})
export class EnseignantsPage implements OnInit {

  constructor(
    public API: ApiService
  ) { }

  ngOnInit() {
    if (this.API.profs === undefined) {
      this.API.getEnseignants();
    }
  }

  onChange() {
    
  }

}
