import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getAllSports(){
    return this.http.get(`${this.uri}/sports/getAllSports`);
  }
}
