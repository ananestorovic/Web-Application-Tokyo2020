import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-change-your-password',
  templateUrl: './change-your-password.component.html',
  styleUrls: ['./change-your-password.component.css']
})
export class ChangeYourPasswordComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) {
    let user = localStorage.getItem("loggedIn");
    if (user == null) {
      this.router.navigate(['homepage']);
    }


  }

  ngOnInit(): void {

  }

  username: string;
  oldPassword: string;
  newPassword: string;

  requiredFields(): boolean {
    if (this.username == null || this.oldPassword == null || this.newPassword == null) {
      return false;
    } else {
      return true;
    }
  }


  message: string;

  change() {
    if (this.requiredFields() == false) this.message = "All fields are required!";
    else {
      if (!(this.userService.checkPassword(this.newPassword))) this.message = "The new password is not in the correct format!";
      else {
        this.userService.findUser(this.username).subscribe((user: User) => {
          if (user == null) {
            this.message = "There is no user with this username!";
          }
          else {
            if (user.password.localeCompare(this.oldPassword) != 0) this.message = "The current password is incorrect!";
            else {
              if (user.password.localeCompare(this.newPassword) == 0) this.message = "The old and new passwords must be different!";
              else {
                this.userService.changePassword(this.username, this.newPassword).subscribe(resp => {
                  console.log(resp);
                })
                this.message = "Password changed successfully!";
              }


            }
          }
        })
      }
    }
  }
}

