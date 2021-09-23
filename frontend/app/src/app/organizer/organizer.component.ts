import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedIn'));
  }

  user: User;

  logOut(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  //treba fja za odobravanje

  

}



