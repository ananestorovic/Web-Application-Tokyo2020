import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../competition.service';
import { Competition } from '../models/competition';
import { Discipline } from '../models/discipline';
import { SignedParticipant } from '../models/signedParticipant';
import { Sport } from '../models/sport';
import { Sportist } from '../models/sportist';
import { User } from '../models/user';
import { SignedParticipantService } from '../signed-participant.service';
import { SportService } from '../sport.service';
import { SportistService } from '../sportist.service';

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.css']
})
export class LeaderComponent implements OnInit {

  constructor(private router: Router, private sportistService: SportistService,
    private sportService: SportService,
    private competitionService: CompetitionService,
    private signParticipantService: SignedParticipantService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedIn'));


    this.sportistService.getAllSportists().subscribe((data: Sportist[]) => {
      this.sportists = data.filter((one: Sportist) => {
        return one.nationality == this.user.country;
      })
    })

    this.competitionService.getAllOpenCompetion().subscribe((data: Competition[]) => {
      this.competitions = data;
    });


  }



  user: User;

  choosenCompetision: Competition = null;
  competitions: Competition[];


  sportists: Sportist[];
  showSportists: Sportist[];
  showSportistMaker: Sportist[];


  choosenSportist: Sportist = null;




  message: string;

  competitionSex: string = null;
  competitionDiscipline: string = null;
  competitionSport: string = null;

  competitionChange(oneCompetion: Competition) {
    this.competitionSex = oneCompetion.sex;
    this.competitionDiscipline = oneCompetion.discipline;
    this.competitionSport = oneCompetion.sport;



    this.updateShowSportist();




  }



  prijaviSportistu() {
    this.message = "";

    if (this.choosenSportist == null) {
      this.message = "Please, choose sportist";
      return;
    }


    let temp = new SignedParticipant();
    temp.name = this.choosenSportist.name;
    temp.sport = this.competitionSport;
    temp.discipline = this.competitionDiscipline;
    temp.competitionName = this.choosenCompetision.name;
    temp.sex = this.choosenCompetision.sex;

    this.signParticipantService.signParticipateToCompetition(temp).subscribe((mes: string) => {
      this.message = mes;
    }, (error) => {
      this.message = error;
    });

  }



  updateSportistBySex(sex: string) {
    this.showSportistMaker = this.showSportistMaker.filter((oneSportist: Sportist) => {
      if (sex == null) return true;

      return oneSportist.sex == sex;
    })
  }


  updateSportistBySport(sport: string) {
    this.showSportistMaker = this.showSportistMaker.filter((oneSportist: Sportist) => {
      if (sport == null) return true;

      return oneSportist.sport == sport;
    })
  }

  updateSportistByDiscipline(discipline: string) {
    this.showSportistMaker = this.showSportistMaker.filter((oneSportist: Sportist) => {
      if (discipline != null) {
        return undefined != oneSportist.disciplines.find((elem: string) => {
          return elem == discipline;
        });
      }
      return true;
    })
  }

  updateShowSportist() {
    this.showSportistMaker = this.sportists;
    this.updateSportistBySex(this.competitionSex);
    this.updateSportistBySport(this.competitionSport);
    this.updateSportistByDiscipline(this.competitionDiscipline);
    this.showSportists = this.showSportistMaker;

  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
