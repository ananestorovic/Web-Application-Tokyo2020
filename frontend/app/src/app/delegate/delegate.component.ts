
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../competition.service';
import { MedalService } from '../medal.service';
import { Competition } from '../models/competition';
import { Country } from '../models/country';
import { Result } from '../models/result';
import { Round } from '../models/round';
import { SignedParticipant } from '../models/signedParticipant';
import { Sportist } from '../models/sportist';
import { User } from '../models/user';
import { ResultService } from '../result.service';
import { RoundService } from '../round.service';
import { SignedParticipantService } from '../signed-participant.service';
import { SportistService } from '../sportist.service';

@Component({
  selector: 'app-delegate',
  templateUrl: './delegate.component.html',
  styleUrls: ['./delegate.component.css']
})
export class DelegateComponent implements OnInit {

  constructor(private router: Router, private competitionService: CompetitionService, private signedParticipantService: SignedParticipantService,
    private resultService: ResultService, private roundService: RoundService,
    private sportistService: SportistService, private medalService: MedalService) { }

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
  date: string = null;
  time: string = null;
  competition1: Competition = null;
  allCompetitions: Competition[];
  message1: string = null;

  date_time_format: string = "YYYY-MM-DD mm:sss"

  //dodavanje rezultata
  competition2: string = null;
  participant: string = null;
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
  competition3: Round = null;
  allFinalCompetitions: Array<string>;
  allFinalParticipants: Array<string>;
  allFinalRounds: Round[];
  showParticipantsFinal: string[];
  choosenOption: number = 0;
  additionalRoundParticipants: Array<string> = [];
  duplicate: string;
  resultAdditional: string;
  resultsAdditional: Array<string> = [];
  p: string;
  participantsFromAdditional: Array<string> = [];
  participantAdditional: string;
  finalParticipants: Array<string> = [];
  finalResults: Array<string> = [];
  first: string;
  second: string;
  third: string;
  finalResult: string;
  finalParticipant: string;
  participantsForFinal: Array<string>;
  resultsForFinal: Array<string>;
  sportist1: Sportist;
  sportist2: Sportist;
  sportist3: Sportist;
  helpArray: Array<string>;

  isOverlaped(data: Competition[]): boolean {
    let new_date_time = Date.parse(this.date + " " + this.time);



    return undefined != data.find((oneCompetition: Competition) => {
      let date_time = Date.parse(oneCompetition.dateFinalRound + " " + oneCompetition.timeFinalRound);
      if (oneCompetition.name == this.competition1.name) return false;
      if (date_time == new_date_time) {
        for (let index = 0; index < oneCompetition.venue.length; index++) {
          const oneVenue = oneCompetition.venue[index];
          let match = undefined != this.competition1.venue.find((anotherVenu: string) => {
            return anotherVenu == oneVenue;
          });
          if (match) return true;
        }
      }
      return false;
    });
  }

  dateTimeFinalRound() {
    this.message1 = null;

    if (this.competition1 == null) {
      this.message1 = "Please, choose competition";
      return;
    }
    if (this.date == null) {
      this.message1 = "Please, choose date of final round";
      return;
    }
    if (this.time == null) {
      this.message1 = "Please, choose time of final round";
      return;
    }

    //USLOV DA DATUM BUDE U OKVIRU START I END DATUMA ZA TAKMICENJE
    //FJA ZA PROVERU PREKLAPANJA VREMENA I DATUMA!!

    this.competitionService.getAllCompetion().subscribe((data: Competition[]) => {
      if (this.isOverlaped(data)) {
        this.message1 = "There is another final round at selected time, please choose new time";
        return;
      }

      let new_date_time = Date.parse(this.date + " " + this.time);
      let currentTime = new Date();

      if (currentTime.getTime() > new_date_time) {
        this.message1 = "Final round must be in future";
        return;
      }

      this.competitionService.addDateTimeFinalRound(this.competition1.name, this.date, this.time).subscribe(resp => {
        console.log(resp);
        this.message1 = "Successfully added!"
      })
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
      this.numOfParticipant = this.showParticipants.length;
    })

  }

  numOfParticipant: number = 7;
  addResult() {
    this.message1 = "";
    if (this.participant == null || this.result == null) {
      this.message1 = "Fill all field please";
      return;
    }
    this.resultService.addResult(this.competition2, this.participant, this.result, 0).subscribe(resp => {
      console.log(resp);
      this.results.push(this.result);
      this.participants.push(this.participant);
      let index = this.showParticipants.findIndex((oneParticipant: SignedParticipant) => {
        return oneParticipant.name == this.participant;
      })
      this.participant = this.result = null;
      this.showParticipants.splice(index, 1);
      this.message1 = "Successfully added!"
    }, (err) => {
      console.log(err);
      this.message1 = err.error.message;
    })

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
    // if (this.results.length < 7) {
    //   this.message1 = "Minimum number of result is 8!";
    //   return;
    // }
    // if (this.numOfParticipant == 0) return;
    // if (this.results.length != this.numOfParticipant) {
    //   this.message1 = "You did not enter results for all competitors!";
    //   return;
    // }
    this.roundService.addRound(this.competition2, this.results, this.participants, 0, "YES").subscribe(resp => {
      console.log(resp);
      this.message1 = "Results for this round have been added!"
      this.theFirstEight(this.competition2, 0);

    })
    this.results = [];
    this.participants = [];
    this.numOfParticipant = 0;
  }


  processAditionalRound(competitionName: string) {
    this.element = Math.max.apply(null, this.resultsAdditional);
    this.index = this.resultsAdditional.indexOf(this.element);
    this.participantsEight.push(this.participantsFromAdditional[this.index]);
    this.roundService.addRound(competitionName, "", this.participantsEight, 1, "NO").subscribe(resp => {
      console.log(resp);
      this.participantsEight = [];
      this.additionalRoundParticipants = [];
      this.participantsFromAdditional = [];

    })

  }

  theFirstEight(competitionName: string, numberRound: number) {
    this.roundService.getRound(competitionName, numberRound).subscribe((data: Round) => {
      this.arrayREight = data.results;
      this.arrayPEight = data.participants;
      let i = data.results.length;
      while (i > 0) {
        if (i == 1) {
          this.element = Math.max.apply(null, this.arrayREight);
          this.index = this.arrayREight.indexOf(this.element);
          this.p = this.arrayPEight[this.index];
          this.arrayREight.splice(this.index, 1);
          this.arrayPEight.splice(this.index, 1);


          if (this.arrayREight.length != 0)
            this.duplicate = Math.max.apply(null, this.arrayREight);
          else this.duplicate = null;


          if (this.element == this.duplicate) {
            this.additionalRoundParticipants.push(this.p);

            this.index = this.arrayREight.indexOf(this.duplicate);
            this.additionalRoundParticipants.push(this.arrayPEight[this.index]);
            this.arrayREight.splice(this.index, 1);
            this.arrayPEight.splice(this.index, 1);

            if (this.arrayREight.length != 0)
              this.duplicate = Math.max.apply(null, this.arrayREight);
            else this.duplicate = null;

            while (this.element == this.duplicate) {
              this.index = this.arrayREight.indexOf(this.duplicate);
              this.additionalRoundParticipants.push(this.arrayPEight[this.index]);
              this.arrayREight.splice(this.index, 1);
              this.arrayPEight.splice(this.index, 1);

              if (this.arrayREight.length != 0)
                this.duplicate = Math.max.apply(null, this.arrayREight);
              else this.duplicate = null;
            }
            this.message1 = "An additional round must be held!"
            // this.processAditionalRound(competitionName, this.additionalRoundParticipants, this.participantsEight);
          }
          else {
            this.participantsEight.push(this.p);
            this.roundService.addRound(competitionName, "", this.participantsEight, 1, "NO").subscribe(resp => {
              console.log(resp);
              this.participantsEight = [];
            })
          }
        }
        else {
          this.element = Math.max.apply(null, this.arrayREight); //NE TREBA SVUDA MAX!!!
          this.index = this.arrayREight.indexOf(this.element);
          this.participantsEight.push(this.arrayPEight[this.index]);
          this.arrayREight.splice(this.index, 1);
          this.arrayPEight.splice(this.index, 1);

        }
        i--;
      }
    })

  }

  addResultAdditional() {

    this.resultsAdditional.push(this.resultAdditional);
    this.participantsFromAdditional.push(this.participantAdditional);

    //pokusaj da uklonis participante za koje si dodala
  }

  additionalRound() {

    this.element = Math.max.apply(null, this.resultsAdditional);
    this.index = this.resultsAdditional.indexOf(this.element);
    this.participantsEight.push(this.additionalRoundParticipants[this.index]);
    this.roundService.addRound(this.competition2, "", this.participantsEight, 1, "NO").subscribe(resp => {
      console.log(resp);
      this.participantsEight = [];
      this.additionalRoundParticipants = [];
      this.participantsFromAdditional = [];
    })
  }


  ///////////////////////////////////////////////////////////////////////////////////////////////////


  doneFinalRound() {
    this.roundService.updateFinalRound(this.competition3.competition, this.resultsForFinal, this.participantsForFinal, 1).subscribe(resp => {
      console.log(resp);
    })
    this.theFirstThree(this.competition3.competition, 1);
    this.resultsForFinal = [];
    this.participantsForFinal = [];
    this.finalParticipants = [];
    this.finalResults = [];

    this.sportistService.getSportistsByName(this.first).subscribe((data: Sportist) => {
      this.sportist1 = data;
      console.log(data);
    })
    this.sportistService.updateMedalCount(this.sportist1.name).subscribe(resp => {
      console.log(resp);
    })
    this.medalService.updateGold(this.sportist1.nationality).subscribe(resp => {
      console.log(resp);
    })
    this.sportistService.getSportistsByName(this.second).subscribe((data: Sportist) => {
      this.sportist2 = data;
      console.log(data);
    })

    this.sportistService.updateMedalCount(this.sportist2.name).subscribe(resp => {
      console.log(resp);
    })
    this.medalService.updateSilver(this.sportist2.nationality).subscribe(resp => {
      console.log(resp);
    })
    this.sportistService.getSportistsByName(this.third).subscribe((data: Sportist) => {
      this.sportist3 = data;
      console.log(data);
    })

    this.sportistService.updateMedalCount(this.sportist3.name).subscribe(resp => {
      console.log(resp);
    })
    this.medalService.updateBronze(this.sportist3.nationality).subscribe(resp => {
      console.log(resp);
    })

    this.message1 = "PRVO MESTO:" + this.first + " ,DRUGO MESTO:" + this.second + "  ,TRECE MESTO:" + this.third;

    this.roundService.doneRound(this.competition3.competition, 1);
  }

  competitionFinalChanged(selectedFinalRound: Round) {
    this.roundService.getRound(selectedFinalRound.competition, 1).subscribe((round: Round) => {
      this.showParticipantsFinal = round.participants;
    })

  }



  theFirstThree(competitionName: string, numberRound: number) {
    //RESETOVATI VREDNOSTI NIZOVA
    this.roundService.getRound(competitionName, numberRound).subscribe((data: Round) => {
      this.arrayREight = data.results;//MORAS PUSHOVATI OVDE REZULTATE FINALNE RUNDE
      this.arrayPEight = data.participants;
      let i = 3;
      while (i > 0) {
        if (i == 1) {
          this.element = Math.max.apply(null, this.arrayREight);
          this.p = this.arrayPEight[this.index]
          this.index = this.arrayREight.indexOf(this.element);
          this.arrayREight.splice(this.index, 1);
          this.arrayPEight.splice(this.index, 1);
          this.duplicate = Math.max.apply(null, this.arrayREight);
          if (this.element == this.duplicate) {
            this.additionalRoundParticipants.push(this.p);
            this.index = this.arrayREight.indexOf(this.duplicate);
            this.additionalRoundParticipants.push(this.arrayPEight[this.index]);
            this.arrayREight.splice(this.index, 1);
            this.arrayPEight.splice(this.index, 1);
            this.duplicate = Math.max.apply(null, this.arrayREight);
            while (this.element == this.duplicate) {
              this.index = this.arrayREight.indexOf(this.duplicate);
              this.additionalRoundParticipants.push(this.arrayPEight[this.index]);
              this.arrayREight.splice(this.index, 1);
              this.arrayPEight.splice(this.index, 1);
              this.duplicate = Math.max.apply(null, this.arrayREight);
            }
            this.message1 = "An additional round must be held!"
          }
          else {
            this.finalResults.push(this.element);
            this.finalParticipants.push(this.p);
            this.processFinalists(this.allFinalParticipants);

          }
        }
        else {
          this.element = Math.max.apply(null, this.arrayREight); //NE TREBA SVUDA MAX!!!
          this.finalResults.push(this.element);
          this.index = this.arrayREight.indexOf(this.element);
          this.arrayREight.splice(this.index, 1);
          this.finalParticipants.push(this.arrayPEight[this.index]);
        }
        i--;
      }
    })

  }

  processFinalists(finalResult: Array<string>) {
    if (this.finalResults[0] == this.finalResults[1] && this.finalResults[0] == this.finalResults[2]
      && this.finalResults[1] == this.finalResults[2]) {
      this.additionalRoundParticipants.push(this.finalParticipants[0]);
      this.additionalRoundParticipants.push(this.finalParticipants[1]);
      this.additionalRoundParticipants.push(this.finalParticipants[2]);
      this.message1 = "An additional round must be held!"
    }
    else if (this.finalResults[0] == this.finalResults[1]) {
      this.additionalRoundParticipants.push(this.finalParticipants[0]);
      this.additionalRoundParticipants.push(this.finalParticipants[1]);
      this.third = this.additionalRoundParticipants[2];
      this.message1 = "An additional round must be held!"
    }
    else if (this.finalResults[1] == this.finalResults[2]) {
      this.additionalRoundParticipants.push(this.finalParticipants[1]);
      this.additionalRoundParticipants.push(this.finalParticipants[2]);
      this.first = this.additionalRoundParticipants[0];
      this.message1 = "An additional round must be held!"
    }
    else {
      this.first = this.additionalRoundParticipants[0];
      this.second = this.additionalRoundParticipants[1];
      this.third = this.additionalRoundParticipants[2];
      this.message1 = "The final round is over!"
    }
  }

  additionalRoundFinal() {
    let i = 3;
    while (i > 0) {
      this.element = Math.max.apply(null, this.resultsAdditional);
      this.index = this.resultsAdditional.indexOf(this.element);
      this.helpArray.push(this.additionalRoundParticipants[this.index]);
      this.additionalRoundParticipants.slice(this.index, 1);
      this.resultsAdditional.slice(this.index, 1);
      i--;
    }
    this.processFinalists(this.helpArray);
    this.participantsEight = [];
    this.additionalRoundParticipants = [];
    this.participantsFromAdditional = [];
    this.helpArray = [];

  }

  addResultFinal() {
    this.resultsForFinal.push(this.finalResult);
    this.participantsForFinal.push(this.finalParticipant);
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
