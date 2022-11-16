import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Smsin} from '../Model/SMSin-model';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Taxi} from '../Model/taxi';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  nb: Array<Smsin> = [];
  baseUri: string = 'http://41.226.181.121:4000';
  // baseUris: string = 'http://41.226.181.121:4000';
  baseUris: string = 'http://41.226.181.121:4000';

  baseUri_local: string = 'http://localhost:7443';

  httpOptions: any    = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private _http: HttpClient) { }

  // login(body: any) {
  //   return this._http.post('http://41.226.181.121:3003/admin/login', body, {
  //     observe: 'body'
  //   });
  //
  // }

  NbrSMSIn() {
    return this._http.get('http://41.226.181.121:4000/taxi-client/api/nbr-sms');
  }

  nbrSMSout() {
    return this._http.get('http://41.226.181.121:4000/smsoutservice/api/nbr-NbrSMSOut');
  }

  nbrclient() {
    return this._http.get('http://41.226.181.121:4000/taxi-client/api/nbr-client');
  }

  getall() {
    return this._http.get('http://41.226.181.121:4000/taxi-client/api/get-all');
  }

  getsmsout() {
    return this._http.get('http://41.226.181.121:4000/smsoutservice/api/get-listSMS_out');
  }

  NbrOffreEnattente() {
    return this._http.get('http://41.226.181.121:4000/taxi-client/api/NbrOffreEnattente');
  }

  getnbroffre(): Observable<any> {
    const url = `${this.baseUri}/taxi-client/api/NbrOffreEnattente`;
    return this._http.get(url);
  }

  getnbroffreencours(): Observable<any> {
    const url = `${this.baseUri}/taxi-client/api/NbrOffreEncours`;
    return this._http.get(url);
  }
  getnbrdeamandeenattente(): Observable<any> {
    const url = `${this.baseUri}/taxi-client/api/nbr-DemandeEnattente`;
    return this._http.get(url);
  }
  NbrDemandeEncours(): Observable<any> {
    const url = `${this.baseUri}/taxi-client/api/nbr-NbrDemandeEncours`;
    return this._http.get(url);
  }

  allclients(): Observable<any> {
    const url = `${this.baseUri}/taxi-client/api/get-allClients`;
    return this._http.get(url);
  }

  alltaxi(): Observable<any> {
    const url = `${this.baseUri}/taxi-client/api/get-taxi`;
    return this._http.get(url);
  }



  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getAll(): Observable<Taxi[]> {
    return this._http.get<Taxi[]>(this.baseUri);
  }

  get(id: any): Observable<Taxi> {
    return this._http.get(`${this.baseUri}/${id}`);
  }

  create(data: any): Observable<any> {
    return this._http.post(`${this.baseUri_local}/api/add-taxi-admin` , data  , {headers: this.httpOptions});
  }


  update(id: any, data: any): Observable<any> {
    return this._http.put(`${this.baseUri}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this._http.delete(`${this.baseUri}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this._http.delete(this.baseUri);
  }

  findByTitle(title: any): Observable<Taxi[]> {
    return this._http.get<Taxi[]>(`${this.baseUri}?title=${title}`);
  }

}
