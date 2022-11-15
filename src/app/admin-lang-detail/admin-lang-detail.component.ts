import { Component, OnInit, Input } from '@angular/core';
import { DevLanguage } from '../language';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { AdminLangDetailService } from '../service/local/admin-lang-detail.service';
import { LanguageService } from '../service/API-rest/language.service';
import { User } from '../user';
import { AdminDashboardService } from '../service/local/admin-dashboard.service';

@Component({
  selector: 'app-admin-lang-detail',
  templateUrl: './admin-lang-detail.component.html',
  styleUrls: ['./admin-lang-detail.component.scss']
})
export class AdminLangDetailComponent implements OnInit {

  @Input() lang: DevLanguage;
  selectedStudent: User;

  @Input() form: any  = {
    doc_vote: null,
    tut_vote: null,
    exc1_vote: null,
    exc2_vote: null,
    exc3_vote: null,
    exc4_vote: null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private student: AdminDashboardService,
    private languageService: LanguageService,
    private detailService: AdminLangDetailService
  ) { }

  ngOnInit(): void {
    this.student.selectedStudent$.subscribe(msg => this.selectedStudent = msg);
    this.detailService.receiveMessage().subscribe(
      response => {
        this.lang = response;
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

  submit() {
    this.languageService.editStudentVotes
    (
      this.selectedStudent.username, this.lang.dev_lang.id, this.form.doc_vote, this.form.tut_vote,
      this.form.exc1_vote, this.form.exc2_vote, this.form.exc3_vote, this.form.exc4_vote
    ).subscribe(resp => {
      // alert(resp);
      if (resp) {
        this.router.navigate(['/admin-dashboard']);
      }
    })
  }

}
