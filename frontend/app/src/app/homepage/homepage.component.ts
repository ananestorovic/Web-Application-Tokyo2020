import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { MedalService } from '../medal.service';
import { Country } from '../models/country';
import { Medal } from '../models/medal';
import { User } from '../models/user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private countryService: CountryService, private medalService: MedalService) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((data: Country[])=>{
      this.allCountries = data;
    })
    this.medalService.getAllMedals().subscribe((data: Medal[])=>{
      this.allMedals = data;
    })
      this.user = JSON.parse(localStorage.getItem('loggedIn'));
    }
  
    user: User;

    allCountries: Country[];
    allMedals: Medal[];

}
