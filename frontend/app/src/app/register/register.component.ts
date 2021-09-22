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
      || this.surname==null || this.country==null || this.mail==null || this.type==null){
      return false;
    }else{
      return true;
    }
  }

  user: any = null;
  message : string;

 

  register(){
    if (this.requiredFields()==false) this.message="All fields are required!";
    else{
        if(!(this.userService.checkPassword(this.password))) this.message="The password is not in the correct format!";
        else{
          this.userService.findUser(this.username).subscribe((user: User)=>{
            if(user == null){
              if(this.type.localeCompare("Vodja") == 0){
                this.userService.leaderAlreadyExists(this.country, this.type).subscribe((leader: User)=>{
                  if(leader != null && leader.approved == 1){
                    this.message = "There is already a leader of delegation for the selected country!";
                  }else{
                    this.userService.registerService(this.username, this.password, this.name, this.surname, this.country, this.mail, this.type).subscribe(resp=>{
                      console.log(resp);
                      this.message = "You have successfully registered!";
                    })
                  }
                })
              }else{
                this.userService.registerService(this.username, this.password, this.name, this.surname, this.country, this.mail, this.type).subscribe(resp=>{
                  console.log(resp);
                  this.message = "You have successfully registered!";
                })
              }
            }else{
              this.message = "This user already exists in the system!";
            }
          })

        }
  }}
    
}