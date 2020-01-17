import { Calendar } from '@ionic-native/calendar/ngx';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info-edt',
  templateUrl: './info-edt.component.html',
  styleUrls: ['./info-edt.component.scss'],
})
export class InfoEdtComponent implements OnInit {

  @Input() matiere: any;
  @Input() enseignant: any;
  @Input() td: any;
  @Input() salle: any;

  @Input() startTime: any;
  @Input() endTime: any;
  @Input() allDay: any;
  @Input() desc: any;
  @Input() type: any;

  private backbuttonSubscription: Subscription;

  constructor(
    public modalController: ModalController,
    private calendar: Calendar,
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  ngOnDestroy() {
    this.backbuttonSubscription.unsubscribe();
  }

  async close() {    
    await this.modalController.dismiss();
  }

  getCss(): string {

    var type = this.type.toLowerCase();

    switch (type) {

      case "ueo":
      case "annulation":
      case "evaluation":
        return type;
    
      default:
        return "defaultInfo";
    }    
  }

  goBack() {
    this.close();
  }

  rememberItem(): void {
    // Save in calendar
    // https://ionicframework.com/docs/enterprise/calendar

    /**
    * Create a event in the native calendar
    */
    this.calendar.createEvent(
      this.matiere,
      "Université d'Avignon",
      this.salle.replace(/(\r\n|\n|\r)/gm, "") + " / " + this.type.replace(/(\r\n|\n|\r)/gm, ""),
      this.startTime,
      this.endTime
    );

    this.alertDone();
  }

  async alertDone() {
    const alert = await this.alertController.create({
      header: 'Cours enregistrer !',
      // subHeader: 'Subtitle',
      // message: 'This is an alert message.'
      buttons: ['Ok']
    });

    await alert.present();
  }

  async alertFail() {
    const alert = await this.alertController.create({
      header: 'Enregistrement échouer !',
      // subHeader: 'Subtitle',
      // message: 'This is an alert message.'
      buttons: ['Ok']
    });

    await alert.present();
  }

}
