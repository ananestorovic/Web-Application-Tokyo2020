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

    return this.http.post(`${this.uri}/users/loginService`, data);
  }

  registerService(username, password, name, surname, country, mail, type){
    const data = {
      username: username, 
      password: password, 
      name: name,
      surname: surname,
      country: country,
      mail: mail,
      type: type,
      approved: 0 
    }

    return this.http.post(`${this.uri}/users/registerService`, data);
  }

  checkPassword(password: string): boolean{
    if(password.length<8 || password.length>12) return false;
    else{
      let length = password.length;
      if(!((/[a-z]/.test(password.charAt(0)) || (/[A-Z]/.test(password.charAt(0)))))) return false;
      let upper = 0;
      let lower = 0;
      let digit = 0;
      let specChar = 0;

      while(length--){
        let c = password.charAt(length);
        if(/[A-Z]/.test(c)){
          upper++;
        }
        if(/[a-z]/.test(c)){
          lower++;
        }
        if(/[0-9]/.test(c)){
          digit++;
        }
        if(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(c)){
          specChar++;
        }

        if((length-3)>0){
        let first = password.charAt(length);
        let second = password.charAt(length-1);
        let third = password.charAt(length-2);
        let fourth = password.charAt(length-3);
        if((first == second) && (first == third) && (first == fourth)) return false;
        

      }
      
  }
  if(upper < 1 || lower < 3 || digit < 2 || specChar < 2) return false;
  else return true;
}
  }


  changePassword(username, password){
    const data = {
      username: username,
      password: password
    }
    return this.http.post(`${this.uri}/users/changePassword`, data);
  }

  approveUser(username){
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/users/ approveUser`, data);
  }

  findUser(username){
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/users/findUser`, data);
  }

  leaderAlreadyExists(country, type){
    const data = {
      country: country,
      type: type
    }
    console.log(country);
    console.log(type);
    return this.http.post(`${this.uri}/users/leaderAlreadyExists`, data);
  }
}



