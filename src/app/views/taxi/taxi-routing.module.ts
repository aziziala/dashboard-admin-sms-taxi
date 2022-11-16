import {RouterModule, Routes} from '@angular/router';
import {OffreDemandeComponent} from '../offre-demande/offre-demande.component';
import {NgModule} from '@angular/core';
import {TaxiComponent} from './taxi.component';

const routes: Routes = [
  {
    path: '',
    component: TaxiComponent,
    data: {
      title: 'taxi'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxiRoutingModule {}
