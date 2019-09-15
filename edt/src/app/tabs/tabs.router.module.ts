import { FormationsPageModule } from './../formations/formations.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'formations',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../formations/formations.module').then(m => m.FormationsPageModule)
          }
        ]
      },
      {
        path: 'enseignants',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../enseignants/enseignants.module').then(m => m.EnseignantsPageModule)
          }
        ]
      },
      {
        path: 'ue',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../ue/ue.module').then(m => m.UePageModule)
          }
        ]
      },
      {
        path: 'ueo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../ueo/ueo.module').then(m => m.UeoPageModule)
          }
        ]
      },
      {
        path: 'salles',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../salles/salles.module').then(m => m.SallesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/formations',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/formations',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
