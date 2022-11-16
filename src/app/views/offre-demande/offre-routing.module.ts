import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OffreDemandeComponent} from './offre-demande.component';

const routes: Routes = [
  {
    path: '',
    component: OffreDemandeComponent,
    data: {
      title: 'offre-demande'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffreRoutingModule {}
