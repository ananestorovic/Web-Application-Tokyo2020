import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportistService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getSportistsByName(name){
    const data = {
      name: name
    }
    return this.http.post(`${this.uri}/sportists/getSportistsByName`, data);
  }

  getSportistsByCountry(country){
    const data = {
      country: country
    }
    return this.http.post(`${this.uri}/sportists/getSportistsByCountry`, data);
  }

  getSportistsBySport(sport){
    const data = {
      sport: sport
    }
    return this.http.post(`${this.uri}/sportists/getSportistsBySport`, data);
  }

  getSportistsByNameAndCountry(name, country){
    const data = {
      name: name,
      country: country
    }
    return this.http.post(`${this.uri}/sportists/getSportistsByNameAndCountry`, data);
  }

  getSportistsByNameAndSport(name, sport){
    const data = {
      name: name,
      sport: sport
    }
    return this.http.post(`${this.uri}/sportists/getSportistsByNameAndSport`, data);
  }

  getSportistsByCountryAndSport(country, sport){
    const data = {
      country: country,
      sport: sport
    }
    return this.http.post(`${this.uri}/sportists/getSportistsByCountryAndSport`, data);
  }

  getSportists(name, country, sport){
    const data = {
      name: name,
      country: country,
      sport: sport
    }
    return this.http.post(`${this.uri}/sportists/getSportists`, data);
  }


getAllSportists(){
  return this.http.get(`${this.uri}/sportists/getAllSportists`);
}

updateMedalCount(name){
  const data = {
    name: name
  }
  return this.http.post(`${this.uri}/sportists/updateMedalCount`, data);
}
}