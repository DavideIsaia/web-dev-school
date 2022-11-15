import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DevLanguage } from 'src/app/language';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  // login1(username:string, password:string ): Observable<any> {
  //   return this.http.get(`http://localhost:8080/login/${username}/${password}`, {responseType: "json"});
  // }

  loginAdmin(user:User): Observable<any> {
    return this.http.post<User>('http://localhost:8080/role-admin', user);
  }
  login(user:User): Observable<any> {
    return this.http.post<User>('http://localhost:8080/login', user);
  }
}
