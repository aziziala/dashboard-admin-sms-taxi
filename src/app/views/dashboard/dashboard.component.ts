import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  nbrsmsList: any;
  nbrsmsout: any;
  nbrclien: any;
  listall: any;
  listsmsout: any;
  radioModel: string = 'Month';

  constructor( private _apiService: ServiceService,
               private _activatedRoute: ActivatedRoute) {
  }

  getsmsin() {
    this._apiService.NbrSMSIn().subscribe((response: Response) => {
      return this.nbrsmsList = response;
    });
  }
  getsmsout() {
    this._apiService.nbrSMSout().subscribe((response: Response) => {
      return this.nbrsmsout = response;
    });
  }
  getnbrclient() {
    this._apiService.nbrclient().subscribe((data) => {
      return this.nbrclien = data;
    });
  }
  getall() {
    this._apiService.getall().subscribe((data) => {
      return this.listall = data;
    });
  }

  getlistsmsout() {
    this._apiService.getsmsout().subscribe((data) => {
      return this.listsmsout = data;
    });
  }
  ngOnInit(): void {
    this.getnbrclient();
    this.getsmsin();
    this.getsmsout();
    this.getall();
    this.getlistsmsout();
  }
}
