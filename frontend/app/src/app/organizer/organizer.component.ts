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
import { ThrowStmt } from '@angular/compiler';


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
    private delegateService: DelegateService) {
    let user: User = JSON.parse(localStorage.getItem("loggedIn"));
    if (user == null || user.type != "Organizer") {
      this.router.navigate(['homepage']);
    }

  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedIn'));


    this.disciplineService.getAllDisciplines().subscribe((data: Discipline[]) => {
      this.allDisciplines = data;
      this.showDisciplines = data;
    })
    this.delegateService.getAllDelegates().subscribe((data: Delegate[]) => {
      this.allDelegates = data;
      this.showDelegates = data;
    })

    this.sportService.getAllSports().subscribe((data: Sport[]) => {
      this.allSports = data;
    })

    this.venueService.getAllVenues().subscribe((data: Venue[]) => {
      this.allVenues = data;
      this.showVenues = data;
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


  fetchAllDelegatesCompetitionLesThenThre() {
    this.delegateService.getAllDelegates().subscribe((data: Delegate[]) => {
      this.allDelegates = data;
      this.showDelegates = data;
    })
  }

  allCompetitions: Competition[] = [];


  user: User;
  //Add new sport
  sport: string = "";

  //Add discipline to sport
  choosenSport: string = null;
  choosenType: string = null;
  discipline: string = "";
  disciplines: Array<string> = [];

  minNumPlayers: number = 1;
  maxNumPlayers: number = 1;
  // Competition creation
  nameCompetition1: string = "";
  sportName: string = null;
  disciplineName: string = null;
  sex: string = null;
  startDate: string = null;
  endDate: string = null;
  format: string = "";

  allDelegates: Delegate[];
  showDelegates: Delegate[];
  delegates: Array<string> = [];
  delegate: string = null;

  allVenues: Venue[];
  showVenues: Venue[];
  venues: Array<string> = [];
  venue: string = null;

  allSports: Sport[];
  allIndividualSports: Array<string>;

  allDisciplines: Discipline[];
  showDisciplines: Discipline[];


  // Competition status
  nameCompetition2: string = null;
  formed: string = null;


  // Add participants
  nameCompetition3: string = null;
  signedParticipant: string = null;

  allParticipants: SignedParticipant[];
  showParticipants: SignedParticipant[];


  // Aprove participants
  choosenUserType: string = null;
  choosenUser: User = null;
  allUsers: User[];







  // Option
  choosenOption: number = 3;





  fetchAllSports() {
    this.sportService.getAllSports().subscribe((data: Sport[]) => {
      this.allSports = data;
    })
  }

  fetchAllIndividialSports() {
    this.disciplineService.getAllIndividualDisciplines().subscribe((data: Array<string>) => {
      this.allIndividualSports = data;
    })
  }


  // Add sport

  messageAddSport: string = null;
  addSport() {
    this.messageAddSport = null;
    if (this.sport == "") {
      this.messageAddSport = "Sport name can not be empty";
      return;
    }

    this.sportService.addSportService(this.sport, this.disciplines).subscribe((resp: any) => {
      console.log(resp);
      this.messageAddSport = resp.message;
      this.fetchAllSports();
    }, (err: any) => {
      this.messageAddSport = err.error.message;
    })

  }


  // Add discipline

  addDisciplineToSportInBase() {
    this.sportService.addDisciplineService(this.choosenSport, this.discipline).subscribe(resp => {
      this.messageAddDiscipline = "Discipline successfully added";
    },
      (err) => {
        this.messageAddDiscipline = err
      });
  }


  isNumOfPlayersOk(): boolean {
    if (this.choosenType == "i") return true;
    if (this.maxNumPlayers == this.minNumPlayers && this.minNumPlayers == 1 && this.choosenType == "t") {
      this.messageAddDiscipline = "Team sport can not have one participant";
      return false;
    }
    if (this.maxNumPlayers <= 0 || this.minNumPlayers <= 0) {
      this.messageAddDiscipline = "Num of players must be greather then zero";
      return false;
    }
    if (this.minNumPlayers > this.maxNumPlayers) {
      this.messageAddDiscipline = "Max num of players must be greather then min";
      return false;
    }
    return true;

  }

  messageAddDiscipline: string = null;
  addDiscipline() {
    this.messageAddDiscipline = null;
    if (this.choosenSport == null) {
      this.messageAddDiscipline = "Please choose sport";
      return;
    }
    if (this.choosenType == null) {
      this.messageAddDiscipline = "Discipline type can not be empty";
      return;
    }
    if (this.discipline == "") {
      this.messageAddDiscipline = "Discipline name can not be empty";
      return;
    }

    if (!this.isNumOfPlayersOk()) return;


    let min = this.minNumPlayers, max = this.maxNumPlayers;

    if (this.choosenType == 'i') {
      min = 1;
      max = 1;
    }

    this.disciplineService.addDisciplineService(this.choosenSport, this.discipline, this.choosenType, min, max).subscribe(resp => {
      if (this.choosenType == 'i') {
        this.fetchAllIndividialSports();
      }
      this.addDisciplineToSportInBase();
    }, (err) => {
      this.messageAddDiscipline = err.error.message;
    })

  }


  // Create new competition

  isCompetitionFieldOk(): boolean {
    if (this.format == "") {
      this.messageAddCompetition = "Competition format can no be empty";
      return false;
    }
    if (this.nameCompetition1 == "") {
      this.messageAddCompetition = "Competition name can no be empty";
      return false;
    }
    if (this.sportName == null) {
      this.messageAddCompetition = "Please choose sport";
      return false;
    }
    if (this.disciplineName == null) {
      this.messageAddCompetition = "Please choose discipline";
      return false;
    }
    if (this.sex == null) {
      this.messageAddCompetition = "Please choose gender";
      return false;
    }
    if (this.startDate == null) {
      this.messageAddCompetition = "Please choose startDate";
      return false;
    }
    if (this.endDate == null) {
      this.messageAddCompetition = "Please choose endDate";
      return false;
    }
    if (Date.parse(this.startDate) > Date.parse(this.endDate)) {
      this.messageAddCompetition = "Start date can not be after end date";
      return false;
    }
    if (this.venues.length == 0) {
      this.messageAddCompetition = "Please choose minimal one venue";
      return false;
    }
    if (this.delegates.length == 0) {
      this.messageAddCompetition = "Please choose delagate";
      return false;
    }
    return true;
  }


  updateNumOfDelegateCompetitions(delegate: string) {
    return this.delegateService.incrementDelegate(delegate).toPromise();
  }
  async updateNumOfChoosenDelegatesCompetitions() {
    for (let index = 0; index < this.delegates.length; index++) {
      await this.updateNumOfDelegateCompetitions(this.delegates[index]);

    }
    this.fetchAllDelegatesCompetitionLesThenThre();

    this.delegates = [];
    this.delegate = null;


  }
  messageAddCompetition: string = null;
  create() {
    this.messageAddCompetition = null;
    if (!this.isCompetitionFieldOk()) return;

    this.updateNumOfChoosenDelegatesCompetitions();
    this.competitionService.addCompetition(this.nameCompetition1, this.sportName, this.disciplineName, this.sex,
      this.startDate, this.endDate, this.venues, this.format, this.delegates, this.formed, "", "").subscribe((resp: any) => {

        this.messageAddCompetition = resp.message;
      }, (err) => {
        this.messageAddCompetition = err.error.message;
      });



  }

  sportChanged(sportName: string) {
    this.sportName = sportName;
    if (sportName == null) {
      this.showDisciplines = [];
      return;
    }

    this.disciplineName = null;
    this.showDisciplines = this.allDisciplines.filter((oneDiscipline: Discipline) => {
      return oneDiscipline.sport == sportName;
    })

    this.venue = null;
    this.venues = [];


    this.delegate = null;
    this.delegates = [];
    this.showDelegates = this.allDelegates;

    this.showVenues = this.allVenues.filter((oneVenue: Venue) => {
      return oneVenue.sports.find((oneSport: string) => {
        return oneSport == sportName;
      }) != undefined;
    })

  }

  addVenue() {
    if (this.venue == null) {
      this.messageAddCompetition = "Plese choose which venu to add";
      return;
    }
    this.venues.push(this.venue);

    let index = this.showVenues.findIndex((oneVenue: Venue) => {
      return oneVenue.name == this.venue;
    })
    this.showVenues.splice(index, 0);
    this.venue = null;
  }

  addDelegate() {
    if (this.delegate = null) {
      this.messageAddCompetition = "Plese choose which delegate to add";
      return;
    }
    this.delegates.push(this.delegate);

    let index = this.showDelegates.findIndex((oneDelegate: Delegate) => {
      return oneDelegate.name == this.delegate;
    })
    this.showDelegates.splice(index, 0);
    this.delegate = null;
  }

  // Change competition status

  messageChangeComeprtitionStatus: string;
  changeCompetitionStatus() {
    if (this.nameCompetition2 == null) {
      this.messageChangeComeprtitionStatus = "Please choose competition";
      return;
    }
    if (this.formed == null) {
      this.messageChangeComeprtitionStatus = "Please choose new status for the competition";
      return;
    }
    this.competitionService.changeCompetitionStatus(this.nameCompetition2, this.formed).subscribe((resp: any) => {
      this.messageChangeComeprtitionStatus = resp.message;
    })
  }


  // Add participant

  showParticipantsMaker: SignedParticipant[] = [];

  updateParticipantByCompetitionName(competitionName: string) {
    this.showParticipantsMaker = this.showParticipantsMaker.filter((oneParticipant: SignedParticipant) => {
      return oneParticipant.competitionName == competitionName;
    })
  }

  removeAlreadySignedParticipants(alredaySignedParticipant: string[]) {
    this.showParticipantsMaker = this.showParticipantsMaker.filter((oneParticipant: SignedParticipant) => {
      return undefined == alredaySignedParticipant.find((signedParticipant: string) => {
        return signedParticipant == oneParticipant.name;
      })
    })
  }




  competitionChanged(cometitionName: string) {
    if (cometitionName == null) return;
    this.showParticipants = [];
    this.signedParticipant = null;

    this.showParticipantsMaker = this.allParticipants;
    this.competitionService.getCompetitionByName(cometitionName).subscribe((competition: Competition) => {
      console.log(competition);

      this.updateParticipantByCompetitionName(cometitionName);
      this.removeAlreadySignedParticipants(competition.signedParticipants);
      this.showParticipants = this.showParticipantsMaker;
    });
  }

  messageAddParticipant: string = null;
  addParticipant() {

    if (this.nameCompetition3 == null) {
      this.messageAddParticipant = "Please, choose competition";
      return;
    }

    if (this.signedParticipant == null) {
      this.messageAddParticipant = "Please, choose participant";
      return;
    }

    this.competitionService.addCompetitor(this.nameCompetition3, this.signedParticipant).subscribe((resp: any) => {
      this.messageAddParticipant = resp.message;
      let index = this.showParticipants.findIndex((oneParticipant: SignedParticipant) => {
        return oneParticipant.name == this.signedParticipant;
      });
      this.showParticipants.splice(index, 1);
      this.signedParticipant = null;
    }, (err) => {
      this.messageAddParticipant = err;
    })


  }

  selectedTypeChanged(type: string) {
    this.getNotAprovedUsers(type);
    this.choosenUser = null;
  }

  selectedUserChanged(user: User) {
    this.messageApproveUser = null;
  }

  getNotAprovedUsers(type: string) {
    this.userService.getNotApprovedUsers(type).subscribe((data: User[]) => {
      this.allUsers = data;
      console.log(data);

    })
  }


  messageApproveUser: string = null;
  approveSelectedUser() {
    this.messageApproveUser = null;
    this.userService.approveUser(this.choosenUser.username).subscribe((resp: any) => {
      this.messageApproveUser = resp.message;
    }, (err) => {
      this.messageApproveUser = err.error.message;
    })
  }


  logOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }


}



