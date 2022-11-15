import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Web Developer School';

  username = "prova";
  onLogin() {
    // this.username = username;
    // alert("ciao");
  }
}
