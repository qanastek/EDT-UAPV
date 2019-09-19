import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.page.html',
  styleUrls: ['./formations.page.scss'],
})
export class FormationsPage implements OnInit {

  public searchCurrent: string = "";

  // eventSource = this.API.loadCalendar(this.API.edtSelected);
  eventSource = [];

  constructor(
    public API: ApiService,
    public popoverController: PopoverController,
    public router: Router
  ) { }

  ngOnInit() {
    this.API.getAllPromos();
  }

  goToGroups(code: any) {
    this.searchCurrent = '';
    this.API.getGroupsAndEdt(code);
        
    this.router.navigate(["groups"]);
  }

}
