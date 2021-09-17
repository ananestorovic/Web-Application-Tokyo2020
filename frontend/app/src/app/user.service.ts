import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  logInService(username, password){
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/users/login`, data);
  }

  registerService(username, password, name, surname, country, mail, type){
    const data = {
      username: username, 
      password: password, 
      name: name,
      surname: surname,
      country,
      mail: mail,
      type: type
    }

    return this.http.post(`${this.uri}/users/register`, data);
  }
}