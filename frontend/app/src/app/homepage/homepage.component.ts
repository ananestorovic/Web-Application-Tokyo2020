import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { MedalService } from '../medal.service';
import { Country } from '../models/country';
import { Medal } from '../models/medal';
import { Sport } from '../models/sport';
import { Sportist } from '../models/sportist';
import { User } from '../models/user';
import { SportService } from '../sport.service';
import { SportistService } from '../sportist.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private countryService: CountryService, private medalService: MedalService,
    private sportistService: SportistService, private sportService: SportService) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((data: Country[]) => {
      this.allCountries = data;
    })
    this.medalService.getAllMedals().subscribe((data: Medal[]) => {
      this.allMedals = data;
    })
    this.sportistService.getAllSportists().subscribe((data: Sportist[]) => {
      this.allSportists = data;
    })
    /*this.sportService.getAllSports().subscribe((data: Sport[])=>{
      this.allSports = data;
    })*/
    this.user = JSON.parse(localStorage.getItem('loggedIn'));
  }

  user: User;

  allCountries: Country[];
  allMedals: Medal[];
  allSportists: Sportist[];
  allSports: Sport[];
  name: string;
  country: string;
  sport: string;

  page1 = 1;
  page2 = 1;
  page3 = 1;

  isEmpty(str) {
    return (!str || str.length === 0);
  }

  search() {
    if (this.isEmpty(this.name) && this.country == null && this.sport == null) {
      this.sportistService.getAllSportists().subscribe((data: Sportist[]) => {
        this.allSportists = data;
      })
    }
    else {
      if (this.isEmpty(this.name) && this.country != null && this.sport != null) {
        this.sportistService.getSportists(this.name, this.country, this.sport).subscribe((data: Sportist[]) => {
          this.allSportists = data;
        })
      }
      else if (!this.isEmpty(this.name) && this.country != null) {
        this.sportistService.getSportistsByNameAndCountry(this.name, this.country).subscribe((data: Sportist[]) => {
          this.allSportists = data;

        })
      }
      else if (!this.isEmpty(this.name) && this.sport != null) {
        this.sportistService.getSportistsByNameAndSport(this.name, this.sport).subscribe((data: Sportist[]) => {
          this.allSportists = data;

        })
      }
      else if (this.country != null && this.sport != null) {
        this.sportistService.getSportistsByCountryAndSport(this.country, this.sport).subscribe((data: Sportist[]) => {
          this.allSportists = data;

        })
      }
      else if (!this.isEmpty(this.name)) {
        this.sportistService.getSportistsByName(this.name).subscribe((data: Sportist[]) => {
          this.allSportists = data;

        })
      }
      else if (this.country != null) {
        console.log(this.country);
        this.sportistService.getSportistsByCountry(this.country).subscribe((data: Sportist[]) => {
          this.allSportists = data;

        })
      }
      else if (this.sport != null) {
        this.sportistService.getSportistsBySport(this.sport).subscribe((data: Sportist[]) => {
          this.allSportists = data;

        })
      }

    }
  }
}


