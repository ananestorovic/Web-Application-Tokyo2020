import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignedParticipant } from './models/signedParticipant';

@Injectable({
  providedIn: 'root'
})
export class SignedParticipantService {


  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  signParticipateToCompetition(signedParticipant: SignedParticipant) {
    return this.http.post(`${this.uri}/signedParticipants/signParticipantToCompetition`, signedParticipant);
  }

  getAllParticipants() {
    return this.http.get(`${this.uri}/signedParticipants/getAllParticipants`);
  }
}
