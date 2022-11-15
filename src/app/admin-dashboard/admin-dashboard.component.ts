import { Component, OnInit } from '@angular/core';
import { LanguageDetailComponent } from '../language-detail/language-detail.component';
// import { DEVLANGUAGES } from '../mock-languages';
import { DevLanguage } from '../language';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LanguageService } from '../service/API-rest/language.service';
import { User } from '../user';
import { AdminDashboardService } from '../service/local/admin-dashboard.service';
import { Location } from '@angular/common';
import { AdminLangDetailService } from '../service/local/admin-lang-detail.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  languages: DevLanguage[];
  selectedStudent: User;

  selectedLang: DevLanguage;

  constructor(
    private student: AdminDashboardService,
    private detailService: AdminLangDetailService,
    private location: Location,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.student.selectedStudent$.subscribe(msg => this.selectedStudent = msg);
    // alert("admin dashoboard inizializza= "+ this.selectedStudent.username);
    this.languageService
      .getLanguages(this.selectedStudent.username)
      .subscribe(response => {this.languages = response})
  }


  sendLangVotes(lang: DevLanguage) {
    //al clic del bottone questo metodo fornisce i dettagli tramite il service
    this.selectedLang = lang;
    this.detailService.sendMessage(this.selectedLang);
  }

  goBack(): void {
    this.location.back();
  }
}
