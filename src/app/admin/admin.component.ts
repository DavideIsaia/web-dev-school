import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  students : User[];
  selectedStudent: User;

  constructor(
    private router: Router,
    private userService: UserService,
    private adminDashboardService: AdminDashboardService
  ) { }

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe(response => {this.students = response})
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

}
