import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  allclient: any;
  errorMessage = '';
  loading = true;
  constructor(private _apiService: ServiceService,
              private _activatedRoute: ActivatedRoute) { }

  allclients() {
    this._apiService.allclients().subscribe(
      // next() callback
      (response) => {
        console.log('response received');
        this.allclient = response;
      },
      // error() callback
      (error) => {
        console.error('Request failed with error');
        this.errorMessage = error;
        this.loading = false;
      });
  }
  ngOnInit(): void {
    this.allclients();
  }

}
