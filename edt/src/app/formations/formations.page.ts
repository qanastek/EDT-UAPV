import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

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
    currentDate: new Date(),
    mode: 'week'
  };

  constructor(
    public API: ApiService,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.API.getAllPromos();
  }

  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: CourseComponent,
  //     event: ev,
  //     translucent: true
  //   });
  //   return await popover.present();
  // }

  clickClass(event) {
    console.log(event.title);   
    // this.presentPopover(event);     
  }

}
