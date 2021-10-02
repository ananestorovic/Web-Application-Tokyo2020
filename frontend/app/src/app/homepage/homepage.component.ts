import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../country.service';
import { DisciplineService } from '../discipline.service';
import { MedalService } from '../medal.service';
import { Country } from '../models/country';
import { Discipline } from '../models/discipline';
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
    private sportistService: SportistService, private sportService: SportService,
    private disciplineService: DisciplineService,
    private router: Router) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((data: Country[]) => {
      this.allCountries = data;
    })
    this.medalService.getAllMedals().subscribe((data: Medal[]) => {
      console.log(data);
      this.allMedals = data;
      data.sort((firstMedal: Medal, secondMedal: Medal) => {
        return secondMedal.sum - firstMedal.sum;
      });
      let rank = 1;
      data.forEach((oneMedal: Medal) => {
        oneMedal.ranking = rank++;
      })
    })
    this.sportistService.getAllSportists().subscribe((data: Sportist[]) => {
      this.allSportists = data;
    })
    this.sportService.getAllSports().subscribe((data: Sport[]) => {
      this.allSports = data;
    })

    this.disciplineService.getAllDisciplines().subscribe((data: Discipline[]) => {
      this.allDisciplines = data;
    })
    this.user = JSON.parse(localStorage.getItem('loggedIn'));
  }

  user: User;

  allCountries: Country[] = [];
  showMedals: Medal[] = [];
  allMedals: Medal[] = [];
  allSportists: Sportist[] = [];
  allSports: Sport[] = [];
  allDisciplines: Discipline[];
  showDisciplines: Discipline[];
  name: string = "";
  country: string = null;
  sport: string = null;
  discipline: string = null;
  gender: string = null;
  hasMedals: boolean = false;

  page1 = 1;
  page2 = 1;
  page3 = 1;

  isEmpty(str) {
    return (!str || str.length === 0);
  }

  sportChanged(sport: string) {
    this.discipline = null;

    console.log(this.allDisciplines);
    console.log(sport);
    this.showDisciplines = this.allDisciplines.filter((oneDiscipline: Discipline) => {

      return oneDiscipline.sport == sport;
    })
  }

  searchByName: boolean;
  searchByCountry: boolean;
  searchBySport: boolean;
  searchByDiscipline: boolean;
  searchByGender: boolean;
  searchOnlyWithMedals: boolean;


  serachHelperObj: any = {
    searchByName: false,
    searchByCountry: false,
    searchBySport: false,
    searchByDiscipline: false,
    searchByGender: false,
    searchOnlyWithMedals: false,

    name: null,
    country: null,
    sport: null,
    discipline: null,
    gender: null,
    medals: false
  }

  search() {
    this.searchByName = false;
    this.searchBySport = false;
    this.searchByDiscipline = false;
    this.searchByCountry = false;
    this.searchByGender = false;
    this.searchOnlyWithMedals = false;

    if (!this.isEmpty(this.name)) this.searchByName = true;
    if (this.country != null) this.searchByCountry = true;
    if (this.sport != null) this.searchBySport = true;
    if (this.discipline != null) this.searchByDiscipline = true;
    if (this.gender != null) this.searchByGender = true;
    if (this.hasMedals) this.searchOnlyWithMedals = true;

    this.serachHelperObj.searchByName = this.searchByName;
    this.serachHelperObj.searchBySport = this.searchBySport;
    this.serachHelperObj.searchByDiscipline = this.searchByDiscipline;
    this.serachHelperObj.searchByCountry = this.searchByCountry;
    this.serachHelperObj.searchByGender = this.searchByGender;
    this.serachHelperObj.searchOnlyWithMedals = this.searchOnlyWithMedals;

    this.serachHelperObj.name = this.name;
    this.serachHelperObj.sport = this.sport;
    this.serachHelperObj.discipline = this.discipline;
    this.serachHelperObj.country = this.country;
    this.serachHelperObj.gender = this.gender;
    this.serachHelperObj.medals = this.hasMedals;


    this.sportistService.getSportistsBySearch(this.serachHelperObj).subscribe((data: Sportist[]) => {
      this.allSportists = data;
    })

  }


}


