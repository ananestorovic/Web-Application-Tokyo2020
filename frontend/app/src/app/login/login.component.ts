import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {

  }

  username: string;
  password: string;

  requiredFields(): boolean{
    if(this.username == null || this.password == null){
      return false;
    }else{
      return true;
    }
  }

  //loginError: boolean;
  //isLoggedIn:boolean;


  message: string;

  logIn(){
    this.userService.logInService(this.username, this.password).subscribe((user:User)=>{
      if (this.requiredFields()==false) this.message="All fields are required!"
      else{
        if(user){
          if(user.approved==0) this.message="The user is waiting to be approved!";
          else{
            if(user.type=='Delegate'){
            this.router.navigate(['delegate']);
          }
          else if (user.type=='Leader'){
            this.router.navigate(['leader'])
          }
        else{
          this.router.navigate(['organizer']);
        }}
          
      }
       else{
         
       }

      }
     //srediti one slucajeve!!!
      
    })
  }

}