import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class Validator {

  constructor() { }
  emailCheck(control: FormControl){
    return new Promise(resolve => {
      const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!emailPattern.test(control.value)){
        resolve({ InvalidEmail : true });
      }
      resolve(null);
      });
    }
}