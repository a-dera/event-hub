import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {

  eventForm: FormGroup;

  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,    
    private router: Router,
    //private toastservice: ToastService
    ) { }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      libel: [''],
      description: [''],
      date: [''],
      heure: [''],
      lieu: [''],
      prix: [''],
      organisateur: ['']
    })
      
  }

  onSubmit() {
      if (!this.eventForm.valid) {
        return false;
      } else {
        this.crudService.create(this.eventForm.value)
        .then(() => {
          //this.eventForm.reset();
          this.router.navigate(['/tabs/event']);
        }).catch((err) => {
          console.log(err)
          // this.toastservice.showToast(err.message, 2000);
        });
      }
    }
}
