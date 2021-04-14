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
  selector: 'app-event-detail-user',
  templateUrl: './event-detail-user.page.html',
  styleUrls: ['./event-detail-user.page.scss'],
})
export class EventDetailUserPage implements OnInit {

  public event: Event;

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    const eventId: string = this.route.snapshot.paramMap.get('id');
    (await this.crudService.getUserEvent(eventId)).subscribe(event => {
      this.event = event;
    });
  }

}
