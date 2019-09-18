import { NgCalendarModule } from 'ionic2-calendar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UeoPage } from './ueo.page';

const routes: Routes = [
  {
    path: '',
    component: UeoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UeoPage]
})
export class UeoPageModule {}
