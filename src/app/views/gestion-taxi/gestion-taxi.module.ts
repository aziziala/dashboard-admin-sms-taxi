import {NgModule} from '@angular/core';
import {OffreDemandeComponent} from '../offre-demande/offre-demande.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GestionTaxiRoutingModule} from './gestion-taxi-routing.module';

@NgModule({
  declarations: [OffreDemandeComponent],
  imports: [
    CommonModule,
    GestionTaxiRoutingModule,
    FormsModule
  ]
})
export class GestionTaxiModule { }
