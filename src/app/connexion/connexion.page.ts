import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from "../shared/authentication-service";
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}
  ngOnInit() {
  }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['tabs']);          
        } else {
          window.alert('Echec de la connexion')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}
