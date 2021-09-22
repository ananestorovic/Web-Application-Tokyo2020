import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  uri='http://localhost:4000'

  getAllCountries(){
    return this.http.get(`${this.uri}/countries/getAllCountries`)
  }
}
