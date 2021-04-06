import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {

  addnewform: FormGroup;

  constructor(public addnewFormbuilder: FormBuilder,
    private toastservice: ToastService,
    public ngroute: Router,
    private fbstore: AngularFirestore) {
    this.addnewform = this.addnewFormbuilder.group({
      libel: ['', [Validators.required, Validators.minLength(6)] ],
      description: ['', [Validators.required, Validators.minLength(10)] ],
      date: ['', [Validators.required, Validators.minLength(0)] ],
      lieu: ['', [Validators.required, Validators.minLength(0)] ],
      heure: ['', [Validators.required, Validators.minLength(0)] ],
      prix: ['', [Validators.required, Validators.minLength(1)] ]
    })
  }

  ngOnInit() {
  }

  async doAddnew() {
    
    let productobj = {
      libel: this.addnewform.get('libel').value,
      description: this.addnewform.get('description').value,
      date: this.addnewform.get('date').value,
      heure: this.addnewform.get('heure').value,
      lieu: this.addnewform.get('lieu').value,
      prix: this.addnewform.get('prix').value
    }
    try{
      await this.fbstore.collection("events").add(productobj).then(data => {
        console.log(data);
        this.ngroute.navigate(['/tabs']);
      })
    }catch(error){
      this.toastservice.showToast(error.message, 2000);
      //console.log(error.message);
    }
  }

}
