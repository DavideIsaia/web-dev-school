import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DevLanguage } from 'src/app/language';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private http: HttpClient
  ) { }

  getDevLangBase(): Observable<any> {
    return this.http.get(`http://localhost:8080/lang-list`);
  }

  getLanguages(username:string): Observable<any> {
    return this.http.get(`http://localhost:8080/dashboard/${username}`);
  }

  getStudentsVotes(id:number, progress:number): Observable<any> {
    return this.http.get(`http://localhost:8080/search-students/${id}/${progress}`);
  }

  editStudentVotes(
    username  : string,
    id_devlang: number,
    doc_vote  : number,
    tut_vote  : number,
    exc1_vote : number,
    exc2_vote : number,
    exc3_vote : number,
    exc4_vote : number): Observable<any> {
      return this.http.post(
        `http://localhost:8080/edit-student-votes/${username}/${id_devlang}/${doc_vote}/${tut_vote}/${exc1_vote}/${exc2_vote}/${exc3_vote}/${exc4_vote}`, {responseType: "boolean"}
      );
  }


  // getSingleLanguage(name: string): Observable<any> {
  //   return this.http.get<DevLanguage>(`http://localhost:8080/detailLanguage/${name}`);
  // }

}
