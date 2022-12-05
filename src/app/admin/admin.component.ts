import { ArrayType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevLangBase } from '../dev-lang-base';
import { DevLanguage } from '../language';
import { LanguageService } from '../service/API-rest/language.service';
import { AdminDashboardService } from '../service/local/admin-dashboard.service';
import { DetailUserService } from '../service/local/detail-user.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  selectedStudent   : User;

  @Input() checked_langs: [];
  selectedItemsList : DevLangBase[];
  baseLanguages     : DevLangBase[];
  filteredUsersListByLangs     = []
  filteredUsersListByProgress  : User[];
  students                     : User[];
  userFilterLangs   : DevLanguage[];
  @Input() totalProgress: 0;
  // checkedIDs = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private adminDashboardService: AdminDashboardService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {this.students = response})
    this.languageService.getDevLangBase().subscribe(resp => {this.baseLanguages = resp})
    this.languageService.getAllUsersAndLangsAndProgress().subscribe(resp => {this.userFilterLangs = resp})
  }

  //  invia alla navbar il nome dell'utente loggato
  sendUserDetails(student: User) {
    this.selectedStudent = student;
    this.adminDashboardService.selectedStudent$.subscribe(msg => this.selectedStudent = msg);
    this.adminDashboardService.setStudent(student);
    this.router.navigate([`/admin-dashboard`]);
  }

  studentsFiltered() {
    let tempArray = []
    this.filteredUsersListByProgress.forEach(student => {
      this.filteredUsersListByLangs.forEach(user => {
        // console.log("ciao");
        if ( student.username == user) {
          this.students = []
          if (!tempArray.includes(user)) {
            // console.log(student.username);
            // console.log(user);
            tempArray.push(user)
            tempArray.shift()
            tempArray.forEach(user => {
              // console.log("caso 10");
              this.students = []
              this.userService.getUser(user).subscribe(response => {
                this.students.push(response)
              })
            });
          }
        }
      });
    });
  }

  getProgressFilter() {
    this.fetchSelectedItems()
    this.languageService.getUsersFilteredList(this.totalProgress)
    .subscribe(resp => {
      this.filteredUsersListByProgress = resp
      if (this.totalProgress > 0 && this.selectedItemsList.length > 0) {
        // console.log("caso 1");
        this.getFilteredByLangs()
        this.studentsFiltered()
      } else if (this.totalProgress == 0 && this.selectedItemsList.length > 0) {
        // console.log("caso 2");
        this.getLanguageFilter()
      } else if (this.totalProgress > 0 && this.selectedItemsList.length == 0) {
        // console.log("caso 3");
        this.students = this.filteredUsersListByProgress
      } else {
        // console.log("caso 4");
        this.userService.getUsers().subscribe(response => {this.students = response})
      }
    });
  }

  // getProgressFilter() {
  //   this.languageService.getUsersFilteredList(this.totalProgress)
  //   .subscribe(resp => {
  //     this.filteredUsersListByProgress = resp
  //     if (this.totalProgress > 0) {
  //       // console.log(this.filteredUsersListByProgress);
  //       this.students = this.filteredUsersListByProgress
  //     } else if (this.filteredUsersListByLangs.length > 0 && this.totalProgress == 0) {
  //       this.getLanguageFilter()
  //     } else {
  //       this.userService.getUsers().subscribe(response => {this.students = response})
  //     }
  //   });
  // }

  getLanguageFilter() {
    this.fetchSelectedItems()
    if (this.totalProgress > 0 && this.selectedItemsList.length > 0) {
      // console.log("caso 5");
      this.getFilteredByLangs()
      this.studentsFiltered()
    } else if (this.selectedItemsList.length > 0) {
      this.getFilteredByLangs()
    } else if (this.totalProgress > 0) {
      // console.log("caso 7");
      this.getProgressFilter()
    } else {
      // console.log("caso 8");
      this.userService.getUsers().subscribe(response => {this.students = response})
    }
  }

  getFilteredByLangs() {
    this.fetchSelectedItems()
    this.selectedItemsList.forEach(element => {
      let tempArray = []
      this.userFilterLangs.forEach(lang => {
        if (element.id == lang.dev_lang.id) {
          tempArray.push(lang.username);
        }
      })
      this.filteredUsersListByLangs = tempArray;
    });
    this.filteredUsersListByLangs.forEach(user => {
      // console.log("caso 6");
      this.students = []
      this.userService.getUser(user).subscribe(response => {
        this.students.push(response)
      })
    });
  }

  // restituisce le caselle selezionate
  fetchSelectedItems() {
    this.selectedItemsList = this.baseLanguages.filter((value, index) => {
      return value.isChecked
    });
  }

  // getLanguageFilter() {
  //   this.fetchSelectedItems()                                                 // vede le checkbox selezionate
  //   this.filteredUsersListByLangs = []
  //   if (this.selectedItemsList.length > 0) {
  //     this.languageService.getUsersAndLangsFilteredList().subscribe(resp => { // riceve la lista di tutti gli studenti che hanno il 50% nelle materie checked
  //       resp.forEach(user => {                                                // per ogni utente della resp
  //         let i = 0;
  //         this.selectedItemsList.forEach(element => {                         // per ogni materia
  //           this.userFilterLangs.forEach(lang => {                            // per ogni materia collegata alla tabella user
  //             if (element.id == lang.dev_lang.id) {                           // se l'id è identico
  //               if (user.username == lang.username && user.dev_lang.dev_lang.id == lang.dev_lang.id) { // se username e id della materia sono uguali ai checked
  //                 i++;
  //                 // console.log("id lang: "+lang.dev_lang.id+"/ user: "+lang.username);
  //                 if (i == this.selectedItemsList.length) {
  //                   this.filteredUsersListByLangs.push(user)
  //                   // do {
  //                   //   this.filteredUsersListByLangs.push(user)                                                // pusho lo user nell'array
  //                   // } while (!this.filteredUsersListByLangs.includes(user) && !this.students.includes(user)); // fin quando non è già incluso
  //                   // if (!this.filteredUsersListByLangs.includes(user) && !this.students.includes(user)) {
  //                   //   this.filteredUsersListByLangs.push(user)
  //                   //   // console.log(this.filteredUsersListByLangs);
  //                   // }
  //                 }
  //               }
  //             }
  //           })
  //         });
  //       })
  //     })
  //     // Array.from(new Set(this.filteredUsersListByLangs));
  //     // Array.from(new Set(this.students));
  //     // console.log(this.filteredUsersListByLangs);
  //     this.students = this.filteredUsersListByLangs;
  //   } else {
  //     this.userService.getUsers().subscribe(response => {this.students = response})
  //   }
  // }

  // getLanguageFilter() {
  //   this.fetchSelectedItems()
  //   this.selectedItemsList.forEach(element => {
  //     // console.log("id: "+element.id+"/ nome: "+element.name);
  //     let tempArray = []
  //     this.userFilterLangs.forEach(item => {
  //       if (element.id == item.dev_lang.id) {
  //         // console.log("id: "+item.dev_lang.id+"/ user: "+item.username);
  //         this.languageService.getUser(item.username).subscribe(resp => {
  //           if (!this.filteredUsersListByLangs.includes(resp.username)) {
  //           this.filteredUsersListByLangs.push(resp)
  //           console.log(this.filteredUsersListByLangs);
  //         }
  //         })
  //         tempArray.push(item.username);
  //         // console.log("elementi presenti: "+tempArray);
  //       }
  //     })
  //     // console.log("temp: "+tempArray);
  //     this.filteredUsersListByLangs = tempArray;
  //   });
  //   // console.log("filtered: "+this.filteredUsersListByLangs);

  //   // return this.filteredUsersListByLangs;
  // }

  // getLanguageFilter() {
  //   this.fetchSelectedItems()// restituisce le checkbox checked
  //   this.selectedItemsList.forEach(element => { // per ogni materia
  //     this.userFilterLangs.forEach(user => { // per ogni materia collegata alla tabella user
  //       let i = 0; // faccio partire un iteratore
  //       if (element.id == user.dev_lang.id) { // se l'id è identico
  //         console.log(i);
  //         this.languageService.getUser(user.username).subscribe(resp => { // la resp è un oggetto di tipo User
  //           // console.log(resp);
  //           // this.filteredUsersListByLangs[i] = resp; // pusho la response nell'array di users -> User[]
  //           // console.log(this.filteredUsersListByLangs);
  //         })
  //       }
  //       i += 1; // incremento l'iteratore
  //     })
  //   });
  //   // restituisco l'array completo di users che raggingono il 50% di studio nella materia selezionata
  //   return this.filteredUsersListByLangs;
  // }

  // fetchCheckedIDs() {
  //   this.checkedIDs = []
  //   this.baseLanguages.forEach((value, index) => {
  //     if (value.isChecked) {
  //       this.checkedIDs.push(value.id);
  //     }
  //   });
  // }
}
