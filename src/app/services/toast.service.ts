import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

 private toastobj: any;

  constructor(public toast: ToastController) { }

  showToast(toastmsg: any, dur: any) {
    this.toastobj = this.toast.create({
      message: toastmsg,
      duration: dur
    }).then((toastData) => {
      toastData.present();
    });
  }

  hideToast() {
    this.toastobj = this.toast.dismiss();
  }

}