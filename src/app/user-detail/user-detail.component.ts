import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DetailUserService } from '../service/local/detail-user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private detailUser: DetailUserService
  ) { }

  ngOnInit(): void {
    this.detailUser.selectedUser$.subscribe(
      response => {
        this.user = response;
      }
    )
  }

  goBack(): void {
    this.location.back();
  }

}
