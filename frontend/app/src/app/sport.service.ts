import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getAllSports() {
    return this.http.get(`${this.uri}/sports/getAllSports`);
  }

  getSportByName(sportName) {
    const data={
      sportName: sportName
    }
    console.log(data);
    return this.http.post(`${this.uri}/sports/getSportByName`, data);
  }

  addSportService(sport, disciplines) {
    const data = {
      sport: sport,
      disciplines: disciplines
    }
    console.log(data);
    return this.http.post(`${this.uri}/sports/addSportService`, data);
  }
  addDisciplineService(sport, discipline) {
    const data = {
      sport: sport,
      discipline: discipline
     
    }

    return this.http.post(`${this.uri}/sports/addDisciplineService`, data);
  }

  getAllSportDiscipline(sport: string) {
    return this.http.get(`${this.uri}/sports/getAllSportDiscpiline/${sport}`);
  }




}
