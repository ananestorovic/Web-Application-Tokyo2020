import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  
  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getAllVenues() {
    return this.http.get(`${this.uri}/venues/getAllVenues`);
  }
}
