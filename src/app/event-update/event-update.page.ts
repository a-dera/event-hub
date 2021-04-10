import { Component, OnInit } from '@angular/core';
import { CrudService } from './../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
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
  selector: 'app-event-update',
  templateUrl: './event-update.page.html',
  styleUrls: ['./event-update.page.scss'],
})
export class EventUpdatePage implements OnInit {
  
  libel: string;
  description: string;
  date: string;
  heure: string;
  lieu: string;
  prix: string;
  organisateur: string;

  public event: Event;

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute,
    private toastservice: ToastService,
    private router: Router) { }

  ngOnInit() {

    const eventId: string = this.route.snapshot.paramMap.get('id');
    this.crudService.getEvent(eventId).subscribe(event => {
      this.event = event;
    });
  }

  upda(libel, description, date, heure, lieu, prix, organisateur){
    const eventId: string = this.route.snapshot.paramMap.get('id');
    let data = {
      //$key: key.value,
      libel:libel.value,
      description: description.value,
      date:  date.value, 
      heure: heure.value, 
      lieu: lieu.value, 
      prix: prix.value, 
      organisateur: organisateur.value
    }
      this.crudService.updateEvent(eventId, data)
  }

}
