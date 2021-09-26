import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {


  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }


  addResult(competition, participant, result, numRound) {
    const data = {
      competition: competition,
      participant: participant,
      result: result,
      numRound: numRound
    }

    return this.http.post(`${this.uri}/results/addResult`, data);
  }

  getAllResult(competitionName: string, roundNumber: number) {
    return this.http.get(`${this.uri}/results/getAllResult/${competitionName}/${roundNumber}`);
  }
}
