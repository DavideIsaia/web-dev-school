import { Component, OnInit } from '@angular/core';
import { LanguageDetailComponent } from '../language-detail/language-detail.component';
// import { DEVLANGUAGES } from '../mock-languages';
import { DevLanguage } from '../language';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DetailLanguageService } from '../service/local/detail-language.service';
import { LanguageService } from '../service/API-rest/language.service';
import { User } from '../user';
import { DetailUserService } from '../service/local/detail-user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  languages: DevLanguage[];
  selectedUser ="";

  selectedLang: DevLanguage;

  constructor(
    private user: DetailUserService,
    private detailService: DetailLanguageService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.user.selectedUser$.subscribe(msg => this.selectedUser = msg);
    this.languageService
      .getLanguages(this.selectedUser)
      .subscribe(response => {this.languages = response})
  }


  sendLangDetails(lang: DevLanguage) {
    //al clic del bottone questo metodo fornisce i dettagli tramite il service
    this.selectedLang = lang;
    this.detailService.sendMessage(this.selectedLang);
  }

}
