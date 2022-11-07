import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject
export class SaveMessage{
  private allMessages;


  constructor(private router:Router){
    this.allMessages = JSON.parse(localStorage.getItem('messages')) || [];
    this.allMessages =JSON.stringify(this.allMessages);
  }
 
}
