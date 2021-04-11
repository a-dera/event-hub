import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };

  public events: any[];
  public eventListBackup: any[];

  constructor(private firestore: AngularFirestore) {}

  async ngOnInit() {
  this.events = await this.initializeItems();
  }

  async initializeItems(): Promise<any> {
    const events = await this.firestore.collection('events')
      .valueChanges().pipe(first()).toPromise();
    this.eventListBackup = events;
    return events;
  }

  async filterList(evt) {
    this.events = this.eventListBackup;
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.events = this.events.filter(currentEvent => {
      if (currentEvent.libel && searchTerm) {
        return (currentEvent.libel.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || currentEvent.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

}
