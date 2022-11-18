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
  @Input() form     : any  = {
    id: 1,
    total_progress: 0
  };

  constructor(
    private router: Router,
    private userService: UserService,
    private adminDashboardService: AdminDashboardService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe(response => {this.students = response})
    this.languageService.getDevLangBase().subscribe(resp => {this.base_languages = resp})
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

  search() {
    this.languageService.getUsersFilteredList(this.form.total_progress)
    .subscribe(resp => {
      // console.log(resp)
      this.filteredUsersList = resp
      this.students = this.filteredUsersList
    });

  }

}
