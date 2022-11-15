import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  private student$ = new BehaviorSubject<any>(null);
  selectedStudent$ = this.student$.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  setStudent(student:User) {
    this.student$.next(student);
    // alert("service: settato "+student.username);
  }
}
