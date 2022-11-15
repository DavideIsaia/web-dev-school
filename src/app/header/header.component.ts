import { Component, OnInit } from '@angular/core';
import { DetailUserService } from '../service/local/detail-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username = "";

  constructor(
    private user: DetailUserService
  ) { }

  ngOnInit(): void {
    this.user.selectedUser$.subscribe(msg => this.username = msg)
  }

  logout() {
    this.username="";
  }
}
