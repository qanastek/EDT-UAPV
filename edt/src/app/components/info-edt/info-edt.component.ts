import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info-edt',
  templateUrl: './info-edt.component.html',
  styleUrls: ['./info-edt.component.scss'],
})
export class InfoEdtComponent implements OnInit {

  @Input() title: any;
  @Input() startTime: any;
  @Input() endTime: any;
  @Input() allDay: any;
  @Input() desc: any;

  private backbuttonSubscription: Subscription;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  ngOnDestroy() {
    this.backbuttonSubscription.unsubscribe();
  }

  async close() {    
    await this.modalController.dismiss();
  }

  goBack() {
    this.close();
  }

}
