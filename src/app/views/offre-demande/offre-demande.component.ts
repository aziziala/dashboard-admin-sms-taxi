import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Offre} from '../../Model/offre';

@Component({
  selector: 'app-offre-demande',
  templateUrl: './offre-demande.component.html',
  styleUrls: ['./offre-demande.component.scss']
})
export class OffreDemandeComponent implements OnInit {
  offre_attente: any;
  offre_encours: any;
  demande_enattente: any;
  demande_encours: any;

  errorMessage = '';
  loading = true;
  constructor(private _apiService: ServiceService,
              private _activatedRoute: ActivatedRoute) { }

  // NbrOffreEnattente() {
  //    this._apiService.NbrOffreEnattente().subscribe((response: any) => {
  //     return this.offre_attente = response;
  //   });
  // }
  offrenbr() {
    this._apiService.getnbroffre().subscribe(
      // next() callback
      (response) => {
        console.log('response received');
        this.offre_attente = response;
      },
      // error() callback
      (error) => {
        console.error('Request failed with error');
        this.errorMessage = error;
        this.loading = false;
      });
  }
  offrenbrencours() {
    this._apiService.getnbroffreencours().subscribe(
      // next() callback
      (response) => {
        console.log('response received');
        this.offre_encours = response;
      },
      // error() callback
      (error) => {
        console.error('Request failed with error');
        this.errorMessage = error;
        this.loading = false;
      });
  }
  getnbrdeamandeenattente() {
    this._apiService.getnbrdeamandeenattente().subscribe(
      // next() callback
      (response) => {
        console.log('response received');
        this.demande_enattente = response;
      },
      // error() callback
      (error) => {
        console.error('Request failed with error');
        this.errorMessage = error;
        this.loading = false;
      });
  }

  NbrDemandeEncours() {
    this._apiService.NbrDemandeEncours().subscribe(
      // next() callback
      (response) => {
        console.log('response received');
        this.demande_encours = response;
      },
      // error() callback
      (error) => {
        console.error('Request failed with error');
        this.errorMessage = error;
        this.loading = false;
      });
  }
  ngOnInit(): void {
    this.offrenbr();
    this.offrenbrencours();
    this.getnbrdeamandeenattente();
    this.NbrDemandeEncours();
  }

}
