import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";

export class Event {
  //$key: string;
  libel: string;
  description: string;
  date: string;
  heure: string;
  lieu: string;
  prix: string;
  organisateur: string;
}

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(
    private ngFirestore: AngularFirestore,
    private router: Router
  ) { }

  create(event: Event) {
    return this.ngFirestore.collection('events').add(event);
  }

  getEvents() {
    return this.ngFirestore.collection('events').snapshotChanges();
  }
  
  getEvent(id) {
    return this.ngFirestore.collection('events').doc(id).valueChanges();
  }

  update(id, event: Event) {
    this.ngFirestore.collection('events').doc(id).update(event)
      .then(() => {
        this.router.navigate(['/tabs/home']);
      }).catch(error => console.log(error));;
  }

  delete(id: string) {
    this.ngFirestore.doc('events/' + id).delete();
  }

}