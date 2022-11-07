import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject
export class Erase{
  constructor(private router:Router){
    //localStorage.clear();
  }
 
}
