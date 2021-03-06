import { Component, OnInit } from '@angular/core';
import { CrudService } from './../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

export class Event {
  libel: string;
  description: string;
  date: string;
  heure: string;
  lieu: string;
  prix: string;
  organisateur: string;
 }
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})

export class EventDetailPage implements OnInit {

 public event: Event;

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const eventId: string = this.route.snapshot.paramMap.get('id');
    (this.crudService.getEvent(eventId)).subscribe(event => {
      this.event = event;
    });
  }
   doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
