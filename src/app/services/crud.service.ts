import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
//import 'firebase/storage';
//import * as firebase from 'firebase/app';

export class Event {
  //$key: string;
  libel: string;
  description: string;
  date: string;
  heure: string;
  lieu: string;
  prix: string;
  organisateur: string;
  //image: any;
}

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(
    private ngFirestore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    private router: Router
  ) { }

  async create(event: Event) {
    let currentUser = await this.ngFireAuth.currentUser;
    return this.ngFirestore.collection('people').doc(currentUser.uid).collection('events').add(event);
  }

  //afficher tous les events (sur la page home, visible par tout le monde)
  getEvents() {
    return this.ngFirestore.collection('events').snapshotChanges();
  }

  //affficher les events de d'un user donné (sur la page de gestion)--uniquement visible par l'auteur
  async getUserEvents() {
    let currentUser = await this.ngFireAuth.currentUser;
    if(currentUser){
    return this.ngFirestore.collection('people').doc(currentUser.uid).collection('events').snapshotChanges();
    }
  }
  
  getEvent(id: string) {
    return this.ngFirestore.collection('events').doc<Event>(id).valueChanges();
  }

  async getUserEvent(id: string) {
    let currentUser = await this.ngFireAuth.currentUser;
    return this.ngFirestore.collection('people').doc(currentUser.uid).collection('events').doc<Event>(id).valueChanges();
  }
 
  updateEvent(id, event: Event) {
    this.ngFirestore.collection('events').doc<Event>(id).update(event)
      .then(() => {
        this.router.navigate(['/tabs/events']);
      }).catch(error => console.log(error));;
  }

  async delete(id: string) {
    let currentUser = await this.ngFireAuth.currentUser;
    //this.ngFirestore.collection('people').doc('currentUser.uid/events/' + id).delete();
    this.ngFirestore.collection('people').doc(currentUser.uid).collection('events').doc(id).delete()
  }

  /*encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };

  uploadImage(imageURI, randomId){
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child(randomId);
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          snapshot.ref.getDownloadURL()
          .then(res => resolve(res))
        }, err => {
          reject(err);
        })
      })
    })
  }*/

}