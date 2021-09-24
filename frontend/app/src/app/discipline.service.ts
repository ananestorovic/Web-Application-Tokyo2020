import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  addDisciplineService(sport, discipline, type, minNumPlayers, maxNumPlayers) {
    const data = {
      sport: sport,
      discipline: discipline,
      type: type,
      minNumPlayers: minNumPlayers,
      maxNumPlayers: maxNumPlayers
    }

    return this.http.post(`${this.uri}/disciplines/addDisciplineService`, data);
  }

  getAllDisciplines() {
    return this.http.get(`${this.uri}/disciplines/getAllDisciplines`);
  }

  getAllIndividualDisciplines() {
    return this.http.get(`${this.uri}/disciplines/getAllIndividualDisciplines`);
  }

}
