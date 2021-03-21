import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from "../shared/authentication-service";


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {
  }

   signUp(email, password){
      this.authService.RegisterUser(email.value, password.value)
      .then((res) => {
        // Do something here
        /*this.authService.SendVerificationMail()
        this.router.navigate(['verify-email']);*/
        this.router.navigate(['tabs']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}
