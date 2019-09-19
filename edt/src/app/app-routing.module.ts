import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'formations', loadChildren: './formations/formations.module#FormationsPageModule' },
  { path: 'enseignants', loadChildren: './enseignants/enseignants.module#EnseignantsPageModule' },
  { path: 'ueo', loadChildren: './ueo/ueo.module#UeoPageModule' },
  { path: 'salles', loadChildren: './salles/salles.module#SallesPageModule' },
  { path: 'ue', loadChildren: './ue/ue.module#UePageModule' },
  { path: 'groups', loadChildren: './groups/groups.module#GroupsPageModule' },
  { path: 'edt/:value', loadChildren: './edt/edt.module#EdtPageModule' },
  { path: 'add-fav', loadChildren: './add-fav/add-fav.module#AddFavPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
