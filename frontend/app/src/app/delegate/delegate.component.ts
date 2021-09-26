
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../competition.service';
import { Competition } from '../models/competition';
import { Result } from '../models/result';
import { Round } from '../models/round';
import { SignedParticipant } from '../models/signedParticipant';
import { User } from '../models/user';
import { ResultService } from '../result.service';
import { RoundService } from '../round.service';
import { SignedParticipantService } from '../signed-participant.service';

@Component({
  selector: 'app-delegate',
  templateUrl: './delegate.component.html',
  styleUrls: ['./delegate.component.css']
})
export class DelegateComponent implements OnInit {

  constructor(private router: Router, private competitionService: CompetitionService, private signedParticipantService: SignedParticipantService,
    private resultService: ResultService, private roundService: RoundService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedIn'));
    this.competitionService.getAllCompetion().subscribe((data: Competition[]) => {
      this.allCompetitions = data;
    })

    this.signedParticipantService.getAllParticipants().subscribe((data: SignedParticipant[]) => {
      this.allParticipants = data;
      this.showParticipants = data;
      console.log(data);
    })

    this.roundService.getFinalRounds().subscribe((data: Round[]) => {
      this.allFinalRounds = data;
      console.log(data);
    })




  }

  user: User;

  //unosenje datuma i vremena za finalnu rundu takmicenja
  date: string;
  time: string;
  competition1: string;
  allCompetitions: Competition[];
  message1: string;

  //dodavanje rezultata
  competition2: string=null;
  participant: string=null;
  participants: Array<string> = [];
  result: string;
  results: Array<string> = [];
  allParticipants: SignedParticipant[];
  showParticipants: SignedParticipant[];
  numRound: number;
  message2: string;
  flag: Round;
  resultsEight: Array<string> = [];
  participantsEight: Array<string> = [];
  arrayREight: Array<string> = [];
  arrayPEight: Array<string> = [];
  element: string;
  index: number;
  //finalna runda
  competition3: Round=null;
  allFinalCompetitions: Array<string>;
  allFinalParticipants: Array<string>;
  allFinalRounds: Round[];
  showParticipantsFinal: string[];

  choosenOption:number=0;

  dateTimeFinalRound() {
    console.log(this.date);
    console.log(this.time);
    //USLOV DA DATUM BUDE U OKVIRU START I END DATUMA ZA TAKMICENJE
    //FJA ZA PROVERU PREKLAPANJA VREMENA I DATUMA!!


    this.competitionService.addDateTimeFinalRound(this.competition1, this.date, this.time).subscribe(resp => {
      console.log(resp);
      this.message1 = "Successfully added!"
    })
  }

  competitionChanged(competitionName: string) {
    let helper = this.allParticipants;
    this.showParticipants = [];
    
    this.resultService.getAllResult(competitionName, 0).subscribe((result: Result[]) => {

      helper = helper.filter((oneParticipant: SignedParticipant) => {
        return undefined == result.find((oneResult: Result) => {
          return oneResult.participant == oneParticipant.name;
        })
      })
      this.showParticipants = helper.filter((oneParticipant: SignedParticipant) => {
        return oneParticipant.competitionName == competitionName;
      })
    })

  }


  addResult() {
    this.message1 = "";
    if (this.participant == null || this.result == null) {
      this.message1 = "Fill all field please";
      return;
    }

    // if(this.competitionService.getCompetitionByName(this.competition2).sport=="Tennis"{}
    // let foundParticipant = this.participants.find((oneParticipant: string) => {
    //   return oneParticipant == this.participant;
    // })

    // if (foundParticipant != undefined) {
    //   this.message1 = "Participant already added";
    //   return;
    // }
    this.resultService.addResult(this.competition2, this.participant, this.result, 0).subscribe(resp => {
      console.log(resp);
      this.results.push(this.result);
      this.participants.push(this.participant);
      this.participant = this.result = null;
      let index = this.showParticipants.findIndex((oneParticipant: SignedParticipant) => {
        return oneParticipant.name == this.participant;
      })
      this.showParticipants.splice(index, 1);
      this.message1 = "Successfully added!"
    }, (err) => {
      console.log(err);
      this.message1 = err.error.message;
    })

  }

  competitionFinalChanged(selectedFinalRound: Round) {
    this.showParticipantsFinal = selectedFinalRound.participants;
  }



  // isRoundDone(competitionName: string, numberRound: number){
  //   this.roundService.getRound(competitionName, numberRound).subscribe((data: Round) => {
  //     this.flag = data;
  //     if (this.flag.isFinal == "NO") return false;
  //     else return true;
  //   })
  // }
  // doneRound(){} //imam sve za ovo

  addRound() {
    //NE SME MANJE OD 8 rezultata
    if (this.results.length != this.showParticipants.length) {
      this.message1 = "Niste uneli rezultate za sve takmicare u trenutnoj rundi";
      return;
    }
    this.roundService.addRound(this.competition2, this.results, this.participants, 0, "YES").subscribe(resp => {
      console.log(resp);
      this.message1 = "Results for this round have been added!"
      this.theFirstEight(this.competition2, this.numRound);
      this.results = [];
      this.participants = [];
    })
  }

  additionalRound() { }

  theFirstEight(competitionName: string, numberRound: number) {
    //MORAJU DA SE OBRADE DUPLIKATI I POSALJU U ADDITIONAL ROUND
    this.roundService.getRound(competitionName, numberRound).subscribe((data: Round) => {
      this.arrayREight = data.results;
      this.arrayPEight = data.participants;
      let i = 8;
      while (i > 0) {
        this.element = Math.max.apply(null, this.arrayREight); //NE TREBA SVUDA MAX!!!
        this.index = this.arrayREight.indexOf(this.element);
        this.arrayREight.splice(this.index, 1);
        this.participantsEight.push(this.arrayPEight[this.index]);
        i--;
      }
      this.roundService.addRound(competitionName, "", this.participantsEight, 1, "NO").subscribe(resp => {
        console.log(resp);
        this.participantsEight = [];
      })
    })

  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
