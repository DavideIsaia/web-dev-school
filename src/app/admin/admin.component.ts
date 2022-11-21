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

  students          : User[];
  filteredUsersList : User[];
  selectedStudent   : User;
  base_languages    : DevLangBase[];
  langs             : DevLanguage[];
  prova_langs       : DevLanguage[];
  @Input() checked_langs: [];
  @Input() total_progress: 0;
  selectedItemsList : DevLangBase[];
  checkedIDs = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private adminDashboardService: AdminDashboardService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {this.students = response})
    this.languageService.getDevLangBase().subscribe(resp => {this.base_languages = resp})
    this.languageService.getAllUsers().subscribe(resp => {this.prova_langs = resp})
    this.languageService.getLangAndProgress().subscribe(resp => {this.langs = resp})
  }

  sendUserDetails(student: User) {
    this.selectedStudent = student;
    // alert("admin component legge= "+ student.username);
    this.adminDashboardService.selectedStudent$.subscribe(msg => this.selectedStudent = msg);
    // alert("admin component legge= "+ student.username);
    this.adminDashboardService.setStudent(student);
    // alert("admin component legge= "+ student.username);
    this.router.navigate([`/admin-dashboard`]);
  }

  filterByProgress() {
    // console.log(this.form.checked_langs);
    this.languageService.getUsersFilteredList(this.total_progress)
    .subscribe(resp => {
      // console.log(resp)
      this.filteredUsersList = resp
      this.students = this.filteredUsersList
    });
  }

  changeSelection() {
    this.fetchSelectedItems()
    this.selectedItemsList.forEach(element => {
      // console.log("id: "+element.id+"/ nome: "+element.name);
      this.prova_langs.forEach(item => {
        if (element.id == item.dev_lang.id) {
          console.log("id: "+item.dev_lang.id+"/ user: "+item.username);
        }
      })
    });
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.base_languages.filter((value, index) => {
      return value.isChecked
    });
  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.base_languages.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.id);
      }
    });
  }

  // SELECT  users.username, progress, dev_languages.id, name FROM devlangs_users
  // JOIN dev_languages ON id_devlang = id
  // JOIN users ON devlangs_users.username = users.username
  // WHERE progress >= 50 AND role = 'student'

}
