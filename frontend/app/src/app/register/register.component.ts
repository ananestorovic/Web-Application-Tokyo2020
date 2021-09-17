import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  username: string;
  password: string;
  name: string;
  surname: string;
  country: string;
  mail: string;
  type: string;

  register(){
    this.userService.registerService(this.username, this.password, this.name, this.surname, this.country, this.mail, this.type).subscribe(response=>{
      if(response['message']=='user added'){
        alert('OK')
      }
    })
}

}
  


