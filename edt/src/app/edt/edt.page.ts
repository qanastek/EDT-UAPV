import { InfoEdtComponent } from './../components/info-edt/info-edt.component';
import { ApiService } from './../services/api.service';
import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { registerLocaleData } from '@angular/common';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

import * as $ from 'jquery';

@Component({
  selector: 'app-edt',
  templateUrl: './edt.page.html',
  styleUrls: ['./edt.page.scss'],
})
export class EdtPage implements OnInit {

  // Locale
  locale: string = 'fr';

  // Jours qui ne s'affiche pas
  excludeDays: number[] = [0,6];

  // Vue actuelle
  view: CalendarView = CalendarView.Week;

  // Date actuelle de la vue
  viewDate: Date = new Date();

  CalendarView = CalendarView;

  // agendaDay
  public calendarPlugins = [dayGridPlugin, interactionPlugin];

  public edt: any;

  constructor(
    public API: ApiService,
    public route: ActivatedRoute,
    public router: Router,
    public modalController: ModalController,
    private el: ElementRef
  ) { }

  ngOnInit() {

    switch (this.route.snapshot.params.value) {

      case "formations":
        this.edt = this.API.edtSelected;
        break;
        
      case "profs":
        this.edt = this.API.profEdt;
        break; 

      case "ue":
        this.edt = this.API.ueEdt;
        break;

      case "ueo":
        this.edt = this.API.ueoEdt;
        break;

      case "salles":
        this.edt = this.API.salleEdt;
        break;
    
      default:
        this.router.navigate(["formations"]);
        break;
    }
  }

  async presentModal(event) {

    var matiere = event.title.slice(0, event.title.indexOf("Enseignant"));
    var enseignant = event.title.slice(event.title.indexOf("Enseignant"), event.title.indexOf("TD"));
    var td = event.title.slice(event.title.indexOf("TD"), event.title.indexOf("Salle"));
    var salle = event.title.slice(event.title.indexOf("Salle"), event.title.indexOf("Type"));

    const modal = await this.modalController.create({
      component: InfoEdtComponent,
      componentProps: {
        'matiere': matiere.slice(matiere.indexOf(":") + 2, matiere.length),
        'enseignant': enseignant.slice(enseignant.indexOf(":") + 2, enseignant.length),
        'td': td.slice(td.indexOf(":") + 2, td.length),
        'salle': salle.slice(salle.indexOf(":") + 2, salle.length),
        
        'startTime': event.startTime,
        'endTime': event.endTime, 
        'allDay': event.allDay,
        'desc': event.desc,
        'type': event.type
      },
      cssClass: 'info-edt'
    });
    return await modal.present();
  }

  clickItem(event) {
    this.presentModal(event);     
  }

}
