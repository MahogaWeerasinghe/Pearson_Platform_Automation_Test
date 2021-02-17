import {HttpClient,HttpHeaders,HttpErrorResponse}  from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';



@Injectable({
  providedIn: 'root'
})

export class NgserviceService {

  private baseUrl = 'http://localhost:8080/products';

  constructor(public http:HttpClient) { }

  getCountry(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCountry(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateCountry(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCountry(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCountriesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
    


}
