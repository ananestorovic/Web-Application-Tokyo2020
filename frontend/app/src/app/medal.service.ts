import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedalService {

  constructor(private http: HttpClient) { }

  uri='http://localhost:4000'

  getAllMedals(){
    return this.http.get(`${this.uri}/medals/getAllMedals`)
  }
}