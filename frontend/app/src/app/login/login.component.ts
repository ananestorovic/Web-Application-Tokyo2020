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

  user: any = null;
  message : string;

  callback(res: any) {

    if (res && res.password) {

        localStorage.setItem('username', this.username);
        localStorage.setItem('password', this.password)
        this.user = res;
        //if(this.user.approved==0) this.message="The user is waiting to be approved!";
        // else{
           localStorage.setItem('loggedIn', JSON.stringify(this.user)); 
           if(this.user.type=='Delegate'){
           this.router.navigate(['delegate']);
         }
         else if (this.user.type=='Leader'){
           this.router.navigate(['leader'])
         }
       else{
         this.router.navigate(['organizer']);
       }
     // }


      }
       else this.message = "The data entered is incorrect!";
  }


  logIn(){
    if (this.requiredFields()==false) this.message="All fields are required!";
    this.userService.logInService(this.username, this.password).subscribe(res => this.callback(res));
  }
}