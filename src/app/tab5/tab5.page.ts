import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
    var user = this.ngFireAuth.currentUser; // code from firebase docs
    }
  deconnexion() {
    this.authService.SignOut()
  }
    
}
