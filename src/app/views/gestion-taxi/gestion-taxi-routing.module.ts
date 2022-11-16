import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GestionTaxiComponent} from './gestion-taxi.component';

const routes: Routes = [
  {
    path: '',
    component: GestionTaxiComponent,
    data: {
      title: 'gestion-taxi'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionTaxiRoutingModule {}
