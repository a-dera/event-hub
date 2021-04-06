import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { Validator } from './helpers/validation.helpers';

export const firebaseConfig = {
    apiKey: "AIzaSyCNycN7H1qrqj-YaeJmrv34XdMCavJ2N60",
    authDomain: "eventhub-210f2.firebaseapp.com",
    projectId: "eventhub-210f2",
    storageBucket: "eventhub-210f2.appspot.com",
    messagingSenderId: "536601603659",
    appId: "1:536601603659:web:2010968023a469c162a7ce"
  };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule],
  providers: [Validator, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
