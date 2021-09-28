import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  addCompetition(name, sport, discipline, sex, startDate, endDate, venue, format, delegate, formed, dateFinalRound, timeFinalRound) {
    const data = {
      name: name,
      sport: sport,
      discipline: discipline,
      sex: sex,
      startDate: startDate,
      endDate: endDate,
      venue: venue,
      format:format,
      delegate: delegate,
      formed: formed,
      timeFinalRound,
      dateFinalRound
    }

    return this.http.post(`${this.uri}/competitions/addCompetition`, data);
  }


  addCompetitor(name, signedParticipant ){
    const data = {
      name: name,
      signedParticipant: signedParticipant
    }
    return this.http.post(`${this.uri}/competitions/addCompetitor`, data);
  }

  changeCompetitionStatus(name, formed ){
    const data = {
      name: name,
      formed: formed
    }
    return this.http.post(`${this.uri}/competitions/changeCompetitionStatus`, data);
  }


  getAllOpenCompetion() {
    return this.http.get(`${this.uri}/competitions/getAllOpenCompetition`);
  }

  getAllCompetion() {
    return this.http.get(`${this.uri}/competitions/getAllCompetition`);
  }

  addDateTimeFinalRound(name, dateFinalRound, timeFinalRound){
    const data = {
      name: name,
      dateFinalRound: dateFinalRound,
      timeFinalRound: timeFinalRound
    }
    return this.http.post(`${this.uri}/competitions/addDateTimeFinalRound`, data);
  }

  getCompetitionByName(name){
    const data = {
      name: name
    }
    return this.http.post(`${this.uri}/competitions/getCompetitionByName`, data);
  }

  }



