import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxiComponent } from './taxi.component';
import {TaxiRoutingModule} from './taxi-routing.module';



@NgModule({
  declarations: [
    TaxiComponent
  ],
  imports: [
    CommonModule,
    TaxiRoutingModule
  ]
})
export class TaxiModule { }
