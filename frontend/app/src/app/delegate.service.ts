import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DelegateService {

 
  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getAllDelegates() {
    return this.http.get(`${this.uri}/delegates/getAllDelegates`);
  }

  incrementDelegate(name){
    const data = {
      name: name
    }
    return this.http.post(`${this.uri}/delegates/incrementDelegate`, data);
  }
}