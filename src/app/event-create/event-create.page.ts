import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
// import { Key } from 'selenium-webdriver';
import { CrudService } from '../services/crud.service';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {

  
  libel: string;
  description: string;
  date: string;
  heure: string;
  lieu: string;
  prix: string;
  organisateur: string;
      
  constructor(
    private crudService: CrudService,
    private router: Router,
    private toastservice: ToastService
    ) { }

  ngOnInit() {
  }

    add(libel, description, date, heure, lieu, prix, organisateur){
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
      this.crudService.create(data)
      .then((res) => {
        // Do something here
        this.router.navigate(['tabs/event']);
      }).catch((error) => {
        this.toastservice.showToast(error.message, 2000);
      })
  }
}
