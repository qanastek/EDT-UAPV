import { ComponentsModule } from './../components/components';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EdtPage } from './edt.page';

const routes: Routes = [
  {
    path: '',
    component: EdtPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullCalendarModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EdtPage]
})
export class EdtPageModule {}
