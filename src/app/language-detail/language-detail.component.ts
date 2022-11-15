import { Component, OnInit, Input } from '@angular/core';
import { DevLanguage } from '../language';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { DetailLanguageService } from '../service/local/detail-language.service';

@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.component.html',
  styleUrls: ['./language-detail.component.scss']
})
export class LanguageDetailComponent implements OnInit {

  @Input() lang: DevLanguage;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private detailService: DetailLanguageService
  ) { }

  ngOnInit(): void {
    this.detailService.receiveMessage().subscribe(
      response => {
        this.lang = response;
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
