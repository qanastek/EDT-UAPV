import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  public statutEmpty: boolean = false;

  constructor(
    public API: ApiService
  ) { }

  ngOnInit() { 
  }

  public goToEdt() {
    this.statutEmpty = true;
    this.API.getGroupsEdt();
  }

}
