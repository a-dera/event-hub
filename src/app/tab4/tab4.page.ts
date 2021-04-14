import { Component, OnInit } from '@angular/core';
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
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
   
  Events: Event[];

  constructor(private crudService: CrudService) { }

  async ngOnInit( ) {
    (await this.crudService.getUserEvents()).subscribe((res) => {
      this.Events = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as Event
        };
      })
    });
  }

   async eventList() {
    (await this.crudService.getUserEvents())
    .subscribe((data) => {
      console.log(data)
    })
  }

  remove(id) {
    console.log(id)
    if (window.confirm('Voullez-vous vraiment supprimer cet élément définitivement?')) {
      this.crudService.delete(id)
    }
  } 

}
