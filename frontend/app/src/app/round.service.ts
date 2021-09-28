import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }


  addRound(competition, results, participants, numRound, isFinal) {
    const data = {
     competition: competition,
     results: results,
     participants: participants,
     numRound: numRound,
     isFinal: isFinal
    }

    return this.http.post(`${this.uri}/rounds/addRound`, data);
  }

  getRound(competition, numRound){
    const data = {
      competition: competition,
      numRound: numRound
    }
    return this.http.post(`${this.uri}/rounds/getRound`, data);
  }

  doneRound(competition, numRound){
    const data = {
      competition: competition,
      numRound: numRound
    }
    return this.http.post(`${this.uri}/rounds/doneRound`, data);
  }

  
  getFinalRounds(){
    return this.http.get(`${this.uri}/rounds/getFinalRounds`);
  }

  updateFinalRound(competition, results, participants, numRound ){
    const data = {
      competition: competition,
      results: results,
      participants: participants,
      numRound: numRound
    }
    return this.http.post(`${this.uri}/rounds/updateFinalRound`, data);
  }

}
  