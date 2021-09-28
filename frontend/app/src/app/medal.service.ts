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

  updateGold(country){
    const data={
      country:country
    }
    return this.http.post(`${this.uri}/medals/updateGold`, data)
  }

  updateSilver(country){
    const data={
      country:country
    }
    return this.http.post(`${this.uri}/medals/updateSilver`, data)
  }
  updateBronze(country){
    const data={
      country:country
    }
    return this.http.post(`${this.uri}/medals/updateBronze`, data)
  }
}