import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-taxi',
  templateUrl: './taxi.component.html',
  styleUrls: ['./taxi.component.scss']
})
export class TaxiComponent implements OnInit {
  alltaxis: any;
  errorMessage = '';
  loading = true;
  constructor(private _apiService: ServiceService,
              private _activatedRoute: ActivatedRoute) { }
  alltaxi() {
    this._apiService.alltaxi().subscribe(
      // next() callback
      (response) => {
        console.log('response received');
        this.alltaxis = response;
      },
      // error() callback
      (error) => {
        console.error('Request failed with error');
        this.errorMessage = error;
        this.loading = false;
      });
  }

  ngOnInit(): void {
    this.alltaxi();
  }

}
