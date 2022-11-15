import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../../user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailUserService {

  private user$ = new BehaviorSubject<any>(null);
  selectedUser$ = this.user$.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  setUser(user:string) {
    this.user$.next(user);
    // alert("settato "+user);
  }

  sendMessage(user:User){
    this.user$.next(user);
  }
}
