import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any> {
    return this.http.get("http://localhost:8080/users-list");
  }

  getUser(username:string): Observable<any> {
    return this.http.get(`http://localhost:8080/user/${username}`);
  }

}
