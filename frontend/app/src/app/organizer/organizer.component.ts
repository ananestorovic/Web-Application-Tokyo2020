import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../competition.service';
import { DelegateService } from '../delegate.service';
import { DisciplineService } from '../discipline.service';
import { Discipline } from '../models/discipline';
import { SignedParticipant } from '../models/signedParticipant';
import { Sport } from '../models/sport';
import { User } from '../models/user';
import { Venue } from '../models/venue';
import { SignedParticipantService } from '../signed-participant.service';
import { SportService } from '../sport.service';
import { UserService } from '../user.service';
import { VenueService } from '../venue.service';
import { Delegate } from '../models/delegate'
import { Competition } from '../models/competition';


@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  constructor(private router: Router, private sportService: SportService,
    private disciplineService: DisciplineService, private userService: UserService,
    private venueService: VenueService, private competitionService: CompetitionService,
    private signedParticipantService: SignedParticipantService,
    private delegateService: DelegateService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedIn'));

    this.userService.getNotApprovedUsers().subscribe((data: User[]) => {
      this.allUsers = data;
    })

    this.disciplineService.getAllDisciplines().subscribe((data: Discipline[]) => {
      this.allDisciplines = data;
      this.showDisciplines = data;
    })
    this.delegateService.getAllDelegates().subscribe((data: Delegate[]) => {
      this.allDelegates = data;
    })

    this.sportService.getAllSports().subscribe((data: Sport[]) => {
      this.allSports = data;
    })

    this.venueService.getAllVenues().subscribe((data: Venue[]) => {
      this.allVenues = data;
    })

    this.disciplineService.getAllIndividualDisciplines().subscribe((data: Array<string>) => {
      this.allIndividualSports = data;
      console.log(this.allIndividualSports);
    })

    this.signedParticipantService.getAllParticipants().subscribe((data: SignedParticipant[]) => {
      this.allParticipants = data;
      this.showParticipants = data;
      console.log(data);
    })


    this.competitionService.getAllCompetion().subscribe((data: Competition[]) => {
      this.allCompetitions = data;
    })


  }

  allCompetitions: Competition[] = [];

  user: User;
  choosenSport: string;
  sport: string;

  discipline: string;
  disciplines: Array<string> = [];
  type: string;
  minNumPlayers: number;
  maxNumPlayers: number;
  ///
  allSports: Sport[];
  allIndividualSports: Array<string>;
  allUsers: User[];
  sportName: string;
  sportObj: Sport;
  allDisciplines: Discipline[];
  showDisciplines: Discipline[];
  disciplineName: string;
  sex: string;
  startDate: string;
  endDate: string;
  allVenues: Venue[];
  venue: string;
  venues: Array<string> = [];
  format: string;
  allDelegates: Delegate[];
  delegate: string;
  notApprovedUser: User;
  nameCompetition1: string;
  nameCompetition2: string;
  nameCompetition3: string;

  allParticipants: SignedParticipant[];
  showParticipants: SignedParticipant[];

  usernameApprove: string;

  signedParticipant: string;



  formed: string;

  competitionChanged(cometitionName: string) {
    this.showParticipants = this.allParticipants.filter((oneParticipant: SignedParticipant) => {
      return oneParticipant.competitionName == cometitionName;
    })
  }


  addSport() {
    this.sportService.addSportService(this.sport, this.disciplines).subscribe(resp => {
      console.log(resp);
      this.sportService.getAllSports().subscribe((data: Sport[]) => {
        this.allSports = data;
      })
    })

  }

  addDiscipline() {
    if (this.type == 'i') {
      this.disciplineService.addDisciplineService(this.choosenSport, this.discipline, this.type, 1, 1).subscribe(resp => {
        console.log(resp);
        this.disciplineService.getAllIndividualDisciplines().subscribe((data: Array<string>) => {
          this.allIndividualSports = data;
          console.log(this.allIndividualSports);
        })
      })
     

    }
    else {
      this.disciplineService.addDisciplineService(this.choosenSport, this.discipline, this.type, this.minNumPlayers, this.maxNumPlayers).subscribe(resp => {
        console.log(resp);
      })
    }

    this.sportService.addDisciplineService(this.choosenSport, this.discipline).subscribe(resp => {
      console.log(resp);
    })

  }


  sportChanged(sportName: string) {
    this.sportName = sportName;
    if (sportName == null) {
      this.showDisciplines = [];
      return;
    }

    this.showDisciplines = this.allDisciplines.filter((oneDiscipline: Discipline) => {
      return oneDiscipline.sport == sportName;
    })




  }


  addVenue() {
    console.log(this.venue);
    this.venues.push(this.venue);
  }



  addParticipant() {

    this.competitionService.addCompetitor(this.nameCompetition3, this.signedParticipant).subscribe(resp => {
      console.log(resp);
    })


  }

  incrementDelegate() {
    this.delegateService.incrementDelegate(this.delegate).subscribe(resp => {
      console.log(resp);
    })

  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }



  approve() {
    for (let i = 0; i < this.allUsers.length; i++) {
      this.notApprovedUser = this.allUsers[i];
      this.usernameApprove = this.notApprovedUser.username;
      this.userService.approveUser(this.usernameApprove).subscribe(resp => {
        console.log(resp);
      })


    }
  }

  create() {
    this.competitionService.addCompetition(this.nameCompetition1, this.sportName, this.disciplineName, this.sex,
      this.startDate, this.endDate, this.venues, this.format, this.delegate, "NO").subscribe(resp => {
        console.log(resp);
      })

  }

  closeCompetition() {
    this.competitionService.closeCompetition(this.nameCompetition2, this.formed).subscribe(resp => {
      console.log(resp);
    })


  }



  //treba fja za odobravanje



}



