import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
// import { Key } from 'selenium-webdriver';
import { CrudService } from '../services/crud.service';
//import { ImagePicker } from '@ionic-native/image-picker/ngx';
//import { WebView } from '@ionic-native/ionic-webview/ngx'
import { LoadingController, ToastController } from '@ionic/angular';


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
  //image: any;
      
  constructor(
    private crudService: CrudService,
    private router: Router,
    private toastservice: ToastService
    //private webview: WebView,
    //private imagePicker: ImagePicker,
    //public toastCtrl: ToastController,
    //public loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
    //this.resetFields();
  }

  /*resetFields(){
    this.image = "https://images.pexels.com/photos/793759/pexels-photo-793759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  }*/

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
        //image: this.image
      }
        this.crudService.create(data)
        .then((res) => {
          // Do something here
          this.router.navigate(['tabs/event']);
        }).catch((error) => {
          this.toastservice.showToast(error.message, 2000);
        })
    }

   /* openImagePicker(){
    this.imagePicker.hasReadPermission()
    .then((result) => {
      if(result == false){
        // no callbacks required as this opens a popup which returns async
        this.imagePicker.requestReadPermission();
      }
      else if(result == true){
        this.imagePicker.getPictures({
          maximumImagesCount: 1
        }).then(
          (results) => {
            for (var i = 0; i < results.length; i++) {
              this.uploadImageToFirebase(results[i]);
            }
          }, (err) => console.log(err)
        );
      }
    }, (err) => {
      console.log(err);
    });
  }

  async uploadImageToFirebase(image){
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    const toast = await this.toastCtrl.create({
      message: 'Image was updated successfully',
      duration: 3000
    });
    this.presentLoading(loading);
    let image_src = this.webview.convertFileSrc(image);
    let randomId = Math.random().toString(36).substr(2, 5);

    //uploads img to firebase storage
    this.crudService.uploadImage(image_src, randomId)
    .then(photoURL => {
      this.image = photoURL;
      loading.dismiss();
      toast.present();
    }, err =>{
      console.log(err);
    })
  }

  async presentLoading(loading) {
    return await loading.present();
  }*/
}
