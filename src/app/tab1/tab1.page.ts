import { Component } from '@angular/core';
import { CrudService } from './../services/crud.service';

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

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };
Events: Event[];

  constructor(private crudService: CrudService) { }

  ngOnInit( ) {
    this.crudService.getEvents().subscribe((res) => {
      this.Events = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as Event
        };
      })
    });
  }

   eventList() {
    this.crudService.getEvents()
    .subscribe((data) => {
      console.log(data)
    })
  }

}