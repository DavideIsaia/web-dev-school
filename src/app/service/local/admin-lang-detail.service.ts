import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { DevLanguage } from '../../language';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminLangDetailService {

  private Subject = new BehaviorSubject<DevLanguage>(null);

  constructor(
    private http: HttpClient
  ) { }

  receiveMessage(): Observable<any> {
    return this.Subject.asObservable();
  }

  sendMessage(language:DevLanguage){
    this.Subject.next(language);
  }

}
