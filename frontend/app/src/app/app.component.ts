import { Component } from '@angular/core';
import { Router } from '@angular/router';


declare var addc3: any;
declare var stop: any;
declare var tokyo2020animation: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  constructor(private router: Router){

  }

  title = 'app';


  login() {
    this.router.navigate(["/login"]);
  }

}
