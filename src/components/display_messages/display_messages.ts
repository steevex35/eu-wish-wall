import { HttpClient } from '@aurelia/fetch-client';
import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject

export class display_messages{
  private url = "https://wish-ipsw.onetec.eu/api/wish.php"
  private allMessages;
  private all10Messages;
  
  constructor(private router:Router){
    this.getMessage().then(()=>{this.loadData();});

    setInterval(() => {
    //this.getMessage().then(()=>{this.loadData();});
    //console.log('resh List Of messages');
    window.location.reload();
    }, 60 * 1000);
  }



  async getMessage() {
    const http = new HttpClient();
    await http.fetch(this.url)
    .then(resp => resp.json())
    .then(data => {
    this.allMessages = data;
    localStorage.setItem('messages', JSON.stringify(this.allMessages));
    console.log(this.allMessages)
    return data
    })
    .catch(error => console.log(error))
}


  public loadData() {
    this.allMessages = JSON.parse(localStorage.getItem('messages')) || [];
    this.all10Messages = JSON.parse(localStorage.getItem('10messages')) || [];
      
    this.all10Messages = this.allMessages;
     
      //console.log("AllMessages: "+this.allMessages);
    localStorage.setItem('10messages', JSON.stringify(this.all10Messages));
      //console.log("display message ["+this.all10Messages+"]");
  }  
  
}


