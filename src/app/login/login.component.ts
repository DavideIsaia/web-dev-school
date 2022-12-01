import { Router } from '@angular/router';
import { LoginService } from '../service/API-rest/login.service';
import { Component, EventEmitter, importProvidersFrom, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DetailUserService } from '../service/local/detail-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input()
  form: any  = {
    username : null,
    password : null
  };
  user: User = {
    username         : null,
    password         : null,
    id               : null,
    role             : null,
    registration_date: null,
    actual_state     : null,
    total_progress   : null,
    dev_lang : null
  };
  showLoginError: boolean = false;
  loggedIn:       boolean = false;
  selectedUser:   string  = "";

  // @Output("username") login : EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private loginService: LoginService,
    private userService: DetailUserService
  ) { }

  ngOnInit(): void { }

  submit() {
    this.showLoginError = false;
    this.user.username = this.form.username;
    this.user.password = this.form.password;


    this.loginService.loginAdmin(this.user).subscribe(resp => {
      this.loggedIn = resp;
      // controllo se è un admin
      if (this.loggedIn) {
        this.userService.selectedUser$.subscribe(msg => this.selectedUser = msg);
        this.userService.setUser(this.user.username);
        this.router.navigate(['/admin']);
        this.clear();

        // se non lo è, controllo che sia un normale user
      } else {
        this.loginService.login(this.user).subscribe(resp => {
          this.loggedIn = resp;
          if (this.loggedIn) {
            this.userService.selectedUser$.subscribe(msg => this.selectedUser = msg);
            // alert("ciao "+this.selectedUser);
            this.userService.setUser(this.user.username);
            // alert("hola "+this.user.username);
            this.router.navigate([`/dashboard`]);
            this.clear();

            // se non lo è i dati inseriti sono errati
          } else {
            this.showLoginError = true;
          }
        })
      }
    })
  }

  clear() {
    this.form.username ="";
    this.form.password = "";
  }

  // submit1() {
  //   this.showLoginError = false;
  //   this.loginService.login1(this.username, this.password).subscribe(resp => {
  //     this.loggedIn = resp;
  //     if (this.loggedIn) {
  //       this.router.navigate(['/dashboard']);
  //       this.clear();
  //     } else {
  //       this.showLoginError = true;
  //     }
  //   })
  // }

}
