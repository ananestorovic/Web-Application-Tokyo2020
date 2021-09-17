import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  username: string;
  password: string;
  name: string;
  surname: string;
  country: string;
  mail: string;
  type: string;

  requiredFields(): boolean{
    if(this.username == null || this.password == null || this.name==null
      || this.surname==null || this.country==null || this.mail==null || this.type){
      return false;
    }else{
      return true;
    }
  }

  message: string;

  register(){
    this.userService.registerService(this.username, this.password, this.name, this.surname,
      this.country, this.mail, this.type).subscribe((user:User)=>{
      if (this.requiredFields()==false) this.message="All fields are required!";
      else{
          if(!(this.userService.checkPassword(this.password))) this.message="The password is not in the correct format!";
          else{
            this.userService.findUser(this.username).subscribe((user: User)=>{
              if(user == null){
                if(this.type.localeCompare("Vodja") == 0){
                  this.userService.leaderAlreadyExists(this.country, this.type).subscribe((leader: User)=>{
                    if(leader != null && leader.approved == 1){
                      this.message = "Vec postoji vodja delegacije za odabranu zemlju!";
                    }else{
                      this.userService.registerService(this.username, this.password, this.name, this.surname, this.country, this.mail, this.type).subscribe(resp=>{
                        console.log(resp);
                        this.message = "Uspesno dodat korisnik!";
                      })
                    }
                  })
                }else{
                  this.userService.registerService(this.username, this.password, this.name, this.surname, this.country, this.mail, this.type).subscribe(resp=>{
                    console.log(resp);
                    this.message = "Uspesno dodat korisnik!";
                  })
                }
              }else{
                this.message = "Korisnik vec postoji u sistemu!";
              }
            })

          }
        }
      })
    }
  }