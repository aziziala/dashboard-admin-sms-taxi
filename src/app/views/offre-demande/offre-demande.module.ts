import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {OffreRoutingModule} from './offre-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {OffreDemandeComponent} from './offre-demande.component';



@NgModule({
  declarations: [OffreDemandeComponent],
  imports: [
    CommonModule,
    OffreRoutingModule,
     FormsModule
  ]
})
export class OffreDemandeModule { }
